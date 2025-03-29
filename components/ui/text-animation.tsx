"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextAnimation = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-0 sm:mt-4">
        <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
          {text.split(" ").map((word, idx) => (
            <motion.span
              key={word + idx}
              className="inline-block mr-1 sm:mr-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}; 