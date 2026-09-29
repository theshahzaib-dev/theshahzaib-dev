import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import { systemPrompt } from "@/lib/ai/system-prompt";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GEMINI_API_KEY!,
});

// Comprehensive list of 15 fallback model identifiers across generations & tiers
const MODEL_FALLBACKS = [
  // Tier 1: Primary High-Speed Models
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-1.5-flash",

  // Tier 2: Ultra-Low Latency & Flash-Lite Variants
  "gemini-2.5-flash-lite",
  "gemini-2.0-flash-lite-preview-02-05",
  "gemini-1.5-flash-8b",

  // Tier 3: High-Reasoning Pro Series
  "gemini-2.5-pro",
  "gemini-2.0-pro-exp-02-05",
  "gemini-1.5-pro",

  // Tier 4: Explicit Dated Version Endpoints
  "gemini-1.5-flash-002",
  "gemini-1.5-flash-001",
  "gemini-1.5-pro-002",
  "gemini-1.5-pro-001",

  // Tier 5: Experimental & Fallback Preview Models
  "gemini-2.0-flash-thinking-exp-01-21",
  "gemini-exp-1206",
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { reply: "Message is required." },
        { status: 400 }
      );
    }

    let lastError: any = null;

    // Iterate through all 15 fallback models
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
      } catch (err: any) {
        lastError = err;
        console.warn(
          `[Gemini API Failover] Model '${model}' failed with status ${err?.status || err?.message}. Retrying next candidate...`
        );

        // Brief delay on rate-limit / server overload before trying next model
        if (err?.status === 503 || err?.status === 429) {
          await delay(250);
        }
      }
    }

    // Throw if all 15 models failed sequentially
    throw lastError;
  } catch (error: any) {
    console.error("[Gemini API Error - All models exhausted]:", error);

    return NextResponse.json(
      {
        reply: "All model endpoints are currently experiencing high demand. Please try again in a few seconds.",
      },
      { status: 503 }
    );
  }
}