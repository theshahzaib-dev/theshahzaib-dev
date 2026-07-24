"use client";

import { motion } from "framer-motion";
import { useAI } from "./ai-provider";

export default function AITyping() {
  const { typingTxt } = useAI();
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-2 rounded-2xl border bg-card px-4 py-3">
        <span className="text-sm text-muted-foreground">{typingTxt}</span>

        <div className="flex gap-1">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              className="h-2 w-2 rounded-full bg-cyan-500"
              animate={{
                opacity: [0.3, 1, 0.3],
                y: [0, -3, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: dot * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
