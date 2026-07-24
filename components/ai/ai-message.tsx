"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";
import { Message } from "./types";

interface AIMessageProps {
  message: Message;
}

export default function AIMessage({ message }: AIMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex w-full",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3",
          isUser
            ? "bg-primary text-primary-foreground"
            : "border bg-card"
        )}
      >
        {isUser ? (
          <p>{message.content}</p>
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="mb-3 text-2xl font-bold">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="mb-2 mt-4 text-xl font-semibold">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="mb-2 mt-3 text-lg font-semibold">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="mb-3 leading-7">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="mb-3 list-disc space-y-1 pl-5">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-3 list-decimal space-y-1 pl-5">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="leading-7">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold">
                  {children}
                </strong>
              ),
              code: ({ children }) => (
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
                  {children}
                </code>
              ),
            }}
          >
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}