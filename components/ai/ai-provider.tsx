"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { Message } from "./types";
import { sendToGemini } from "./ai-service";

interface AIContextType {
  open: boolean;
  setOpen: (value: boolean) => void;

  started: boolean;
  setStarted: React.Dispatch<React.SetStateAction<boolean>>;

  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;

  typingTxt: string;
  setTypingTxt: React.Dispatch<React.SetStateAction<string>>;

  error: string | null;

  clearConversation: () => void;

  sendMessage: (message: string) => Promise<void>;

  isTyping: boolean;
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>;
}

const AIContext = createContext<AIContextType | null>(null);

export function AIProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typingTxt, setTypingTxt] = useState("Typing");
  const [started, setStarted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "👋 Hi! I'm Shahzaib's AI assistant. Ask me anything about my skills, projects, experience, or services.",
      createdAt: new Date(),
    },
  ]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    try {
      const { reply } = await sendToGemini(text);

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: reply,
        createdAt: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Something went wrong while contacting Gemini.",
          createdAt: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearConversation = useCallback(() => {
    setMessages([
      {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "👋 Hi! I'm Shahzaib's AI assistant. Ask me anything about my skills, projects, experience, or services.",
        createdAt: new Date(),
      },
    ]);
    setStarted(false);
    setError(null);
  }, []);

  const value = useMemo(
    () => ({
      open,
      setOpen,

      started,
      setStarted,

      messages,
      setMessages,

      typingTxt,
      setTypingTxt,

      error,
      clearConversation,

      sendMessage,

      isTyping,
      setIsTyping,
    }),
    [
      open,
      started,
      messages,
      typingTxt,
      error,
      clearConversation,
      sendMessage,
      isTyping,
    ],
  );

  return <AIContext.Provider value={value}>{children}</AIContext.Provider>;
}

export function useAI() {
  const context = useContext(AIContext);

  if (!context) {
    throw new Error("useAI must be used inside AIProvider");
  }

  return context;
}
