"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 450,
    damping: 35,
    mass: 0.2,
  });

  const y = useSpring(mouseY, {
    stiffness: 450,
    damping: 35,
    mass: 0.2,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handlePointer(e: MouseEvent) {
      const target = e.target as HTMLElement;

      const interactive = target.closest(
        "a, button, .cursor-pointer, [role='button']",
      );

      setIsPointer(!!interactive);
    }

    window.addEventListener("mousemove", handlePointer);

    return () => {
      window.removeEventListener("mousemove", handlePointer);
    };
  }, []);

  useEffect(() => {
    function move(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }

    function enter() {
      setVisible(true);
    }

    function leave() {
      setVisible(false);
    }

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseleave", leave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? (isPointer ? 2 : 1) : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 22,
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
      "
    >
      <div
        className={cn(
          "-translate-x-1/2 -translate-y-1/2 rounded-full border-2 backdrop-blur-md transition-all duration-300",
          isPointer
            ? "h-5 w-5 border-primary bg-background"
            : "h-5 w-5 border-accent bg-primary",
        )}
      />
    </motion.div>
  );
}
