import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import { systemPrompt } from "@/lib/ai/system-prompt";

const MODEL_FALLBACKS = [
  "gemini-3.8-flash",
  "gemini-3.1-flash-lite",
  "gemini-3.8-flash"
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function getErrorDetails(error: unknown) {
  if (typeof error !== "object" || error === null) {
    return { status: undefined, message: String(error) };
  }

  const candidate = error as { status?: unknown; message?: unknown };
  const status =
    typeof candidate.status === "number"
      ? candidate.status
      : typeof candidate.status === "string"
        ? Number(candidate.status)
        : undefined;

  return {
    status: Number.isFinite(status) ? status : undefined,
    message:
      typeof candidate.message === "string"
        ? candidate.message
        : "Unknown Gemini API error",
  };
}

function getUserError(status: number | undefined, message: string) {
  const normalizedMessage = message.toLowerCase();
  if (
    status === 403 &&
    (normalizedMessage.includes("project has been denied access") ||
      normalizedMessage.includes("contact support"))
  ) {
    return "Google has denied Gemini API access to the project for this key. Check that the key belongs to the intended Google AI Studio project and contact Google AI support if access remains denied.";
  }
  if (
    status === 401 ||
    status === 403 ||
    (status === 400 &&
      (normalizedMessage.includes("api key") ||
        normalizedMessage.includes("api_key") ||
        normalizedMessage.includes("permission")))
  ) {
    return "Gemini rejected the API key or its permissions. Check that GOOGLE_GEMINI_API_KEY is valid and allowed to use the Gemini API.";
  }
  if (status === 429) {
    return "The Gemini API quota or rate limit has been reached. Check the quota for the Google project that owns this API key.";
  }
  if (status === 404) {
    return "The configured Gemini models are unavailable for this API key. Check model availability in Google AI Studio.";
  }
  if (status !== undefined && status >= 500) {
    return "Gemini is temporarily unavailable. Please try again shortly.";
  }
  return "Gemini could not process the request. Check the server logs for the API error.";
}

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { reply: "Message is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    if (!apiKey) {
      console.error("[Gemini API Error]: GOOGLE_GEMINI_API_KEY is not configured.");
      return NextResponse.json(
        { reply: "Gemini is not configured on the server. Set GOOGLE_GEMINI_API_KEY and restart the app." },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });
    let lastError: unknown;

    for (const model of MODEL_FALLBACKS) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents: message,
          config: {
            systemInstruction: systemPrompt,
          },
        });

        if (response?.text) {
          return NextResponse.json({ reply: response.text });
        }

        lastError = new Error(`Gemini model '${model}' returned no text.`);
        console.error(`[Gemini API Error] Model '${model}' returned no text.`);
      } catch (err: unknown) {
        lastError = err;
        const details = getErrorDetails(err);
        console.error(`[Gemini API Error] Model '${model}' failed.`, {
          status: details.status,
          message: details.message,
        });

        const canTryFallback =
          details.status === 404 ||
          details.status === 429 ||
          (details.status !== undefined && details.status >= 500);
        if (!canTryFallback) {
          return NextResponse.json(
            { reply: getUserError(details.status, details.message) },
            { status: details.status === 401 || details.status === 403 ? 502 : 400 }
          );
        }

        if (details.status === 429 || (details.status !== undefined && details.status >= 500)) {
          await delay(250);
        }
      }

    }

    const details = getErrorDetails(lastError);
    return NextResponse.json(
      { reply: getUserError(details.status, details.message) },
      { status: details.status === 429 ? 429 : 503 }
    );
  } catch (error: unknown) {
    const details = getErrorDetails(error);
    console.error("[Gemini API Request Error]:", details.message);

    return NextResponse.json(
      {
        reply: "The chat request could not be completed. Check the server logs for details.",
      },
      { status: 400 }
    );
  }
}