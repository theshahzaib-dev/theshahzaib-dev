import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import { systemPrompt } from "@/lib/ai/system-prompt";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GEMINI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const prompt = `
${systemPrompt}

User Question:

${message}
`;

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: prompt,
    });

    return NextResponse.json({
      reply: response.text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        reply: "Sorry, something went wrong.",
      },
      {
        status: 500,
      },
    );
  }
}
