import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import { systemPrompt } from "@/lib/ai/system-prompt";
import { personalInfo } from "@/data/data";


const MODEL_FALLBACKS = [
  "gemini-3.8-flash",       // Primary: capable general-purpose chat
  "gemini-3.7-flash",       // Alternative Flash model
  "gemini-3.6-flash",       // Previous-generation fallback
  "gemini-3.5-flash-lite",  // Lightweight fallback
  "gemini-3.1-flash-lite",  // Additional fallback
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

function getUserError(status: number | undefined, message: string): string {
  const normalizedMessage = message.toLowerCase();

  // Log technical details on the server for debugging.
  console.error("[Gemini API Error]", { status, message });

  // Keep this message consistent for every Gemini error.
  return [
    "### Sorry, we're having trouble connecting to Gemini!",
    "",
    "I couldn't process your message right now. Please try again in a little while.",
    "",
    "If the problem continues, please reach out to **Mr. Shahzaib** through any of these channels:",
    "",
    `- [**LinkedIn**](${personalInfo.linkedin})`,
    `- [**Facebook**](${personalInfo.facebook})`,
    `- [**GitHub**](${personalInfo.github})`,
    `- [**WhatsApp**](https://wa.me/923020549257)`,
  ].join("\n");
}

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { reply: "Message is required." },
        { status: 400 },
      );
    }

    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    if (!apiKey) {
      console.error(
        "[Gemini API Error]: GOOGLE_GEMINI_API_KEY is not configured.",
      );
      return NextResponse.json(
        {
          reply:
            "Gemini is not configured on the server. Set GOOGLE_GEMINI_API_KEY and restart the app.",
        },
        { status: 500 },
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
            {
              status:
                details.status === 401 || details.status === 403 ? 502 : 400,
            },
          );
        }

        if (
          details.status === 429 ||
          (details.status !== undefined && details.status >= 500)
        ) {
          await delay(250);
        }
      }
    }

    const details = getErrorDetails(lastError);
    return NextResponse.json(
      { reply: getUserError(details.status, details.message) },
      { status: details.status === 429 ? 429 : 503 },
    );
  } catch (error: unknown) {
    const details = getErrorDetails(error);
    console.error("[Gemini API Request Error]:", details.message);

    return NextResponse.json(
      {
        reply:
          "The chat request could not be completed. Check the server logs for details.",
      },
      { status: 400 },
    );
  }
}
