"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useAI } from "./ai-provider";
import AIWelcome from "./ai-welcome";
import AIMessages from "./ai-messages";
import AIInput from "./ai-input";

export default function AIDrawer() {
  const { open, setOpen, started } = useAI();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Floating Chat Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              fixed
              bottom-5
              right-5
              z-50
              flex
              flex-col
              overflow-hidden
              rounded-2xl
              border
              bg-background
              shadow-2xl

              w-[calc(100%-2rem)]
              max-w-[420px]

              h-[80vh]
              max-h-[700px]

              sm:w-[400px]
              md:w-[420px]
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b px-5 py-4">
              <div>
                <h2 className="text-lg font-semibold">
                  ✨ Portfolio Assistant
                </h2>
                <p className="text-sm text-muted-foreground">
                  Ask anything about me
                </p>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5">
              {!started ? <AIWelcome /> : <AIMessages />}
            </div>

            {started && <AIInput />}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
