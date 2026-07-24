"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAI } from "./ai-provider";

export default function AIButton() {
  const { setOpen } = useAI();

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.4,
      }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Button
        onClick={() => setOpen(true)}
        size="icon-lg"
        className="
        h-16
        w-16
        rounded-full
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        text-white
        shadow-2xl
        hover:scale-105
        cursor-pointer
        transition-all
        duration-300
        "
      >
        <Sparkles className="size-6" />
      </Button>
    </motion.div>
  );
}