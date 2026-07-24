"use client";

import { useState, KeyboardEvent } from "react";
import { SendHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAI } from "./ai-provider";

export default function AIInput() {
  const [value, setValue] = useState("");

  const { sendMessage, isTyping } = useAI();

  const handleSend = async () => {
    const text = value.trim();

    if (!text) return;

    setValue("");

    try {
      await sendMessage(text);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter" || e.shiftKey) return;

    e.preventDefault();

    await handleSend();
  };

  return (
    <div className="border-t bg-background p-4">
      <div className="flex items-center gap-3">
        <Input
          value={value}
          placeholder="Ask me anything..."
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isTyping}
          className="h-11 rounded-full"
        />

        <Button
          size="icon"
          onClick={handleSend}
          disabled={!value.trim() || isTyping}
          className="size-11 rounded-full"
        >
          <SendHorizontal className="size-5" />
        </Button>
      </div>
    </div>
  );
}
