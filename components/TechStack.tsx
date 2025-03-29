"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { techStack } from "@/lib/constants";

export const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="pt-16 sm:pt-20 md:pt-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I work with
          </p>
        </motion.div>

        <motion.div style={{ opacity }} className="relative">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 py-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center group"
                initial={{ scale: 1, opacity: 0.8 }}
                whileHover={{ 
                  scale: 1.2,
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  scale: 1,
                  opacity: 0.8,
                  transition: {
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 sm:mb-4">
                  <Image
                    src={`./icons/${tech.icon}`}
                    alt={tech.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                    priority={index < 3}
                  />
                </div>
                <span className="text-gray-400 text-sm sm:text-base md:text-lg font-medium group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Gradient overlays for dissolving effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 md:w-48 bg-gradient-to-r from-black to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 md:w-48 bg-gradient-to-l from-black to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}; 