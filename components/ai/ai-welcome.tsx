"use client";

import { Button } from "@/components/ui/button";
import { useAI } from "./ai-provider";

export default function AIWelcome() {
  const { setStarted } = useAI();

  return (
    <div className="flex h-full flex-col justify-center">
      <div className="rounded-2xl border bg-card p-6">
        <h3 className="text-xl font-semibold">
          👋 Welcome
        </h3>

        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          I'm Shahzaib's AI Assistant.

          <br />
          <br />

          I can answer questions about:

          <br />
          • Projects

          <br />
          • Skills

          <br />
          • Experience

          <br />
          • Services
        </p>

        <Button
          onClick={() => setStarted(true)}
          className="mt-6 w-full rounded-full"
        >
          Start Conversation
        </Button>
      </div>
    </div>
  );
}