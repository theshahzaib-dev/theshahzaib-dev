"use client";

import { useAI } from "./ai-provider";
import AIMessage from "./ai-message";
import AITyping from "./ai-typing";

export default function AIMessages() {
  const { messages, isTyping } = useAI();

  return (
    <div className="flex flex-col gap-4">
      <>
        {messages.map((message) => (
          <AIMessage key={message.id} message={message} />
        ))}

        {isTyping && <AITyping />}
      </>
    </div>
  );
}
