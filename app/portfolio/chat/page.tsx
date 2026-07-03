"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = {
  id: number;
  from: "me" | "other";
  text: string;
  time: string;
};

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const initialMessages: Message[] = [
  {
    id: 1,
    from: "other",
    text: "Hi! Tell me a bit about your MERN project 👋",
    time: "10:12",
  },
  {
    id: 2,
    from: "me",
    text: "Hey, I’m interested in building a dashboard with real‑time features.",
    time: "10:13",
  },
  {
    id: 3,
    from: "other",
    text: "Nice! We can use React / Next.js, Node.js, Express and MongoDB for that.",
    time: "10:14",
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        from: "me",
        text: trimmed,
        time,
      },
    ]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <motion.section
      className="mx-auto flex max-w-3xl flex-col gap-4"
      variants={sectionVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Chat
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          A preview of the real-time chat experience this portfolio will have.
          In the final version, this will be powered by a Node.js + MongoDB
          backend and WebSockets, similar to WhatsApp or Messenger.
        </p>
      </div>

      <Card className="border-primary/20 bg-card/80">
        <CardHeader className="border-b border-border/60 pb-3">
          <CardTitle className="flex items-center justify-between text-base sm:text-lg">
            <span>Project chat</span>
            <span className="text-xs font-normal text-muted-foreground">
              Online
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex h-[480px] flex-col gap-3 p-3 sm:p-4">
          <div className="flex-1 space-y-2 overflow-y-auto rounded-md bg-background/60 p-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.from === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
                    msg.from === "me"
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-br-sm"
                      : "bg-card text-foreground rounded-bl-sm"
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words">{msg.text}</p>
                  <span className="mt-1 block text-[10px] text-white/80 opacity-80">
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-1">
            <Input
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-background/80 text-sm"
            />
            <Button
              size="icon"
              className="shrink-0"
              aria-label="Send message"
              onClick={handleSend}
            >
              ➤
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
