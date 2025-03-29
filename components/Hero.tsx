"use client";

import { motion } from "framer-motion";
import { SpotlightEffect } from "./ui/spotlight-effect";
import { TextAnimation } from "./ui/text-animation";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { Contact } from "./Contact";
import { useState } from "react";

export const Hero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <div className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center bg-black overflow-hidden px-8 sm:px-12 lg:px-16 pt-16 sm:pt-0">
        <SpotlightEffect className="w-full max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Image - First on mobile, second on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.2
              }}
              className="w-full md:w-1/2 flex justify-center md:justify-end order-first md:order-last"
            >
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] bg-gray-800 rounded-full">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"
                />
                <div className="relative rounded-full overflow-hidden border-2 border-white/10">
                  <Image
                    src="./me.jpg"
                    alt="Bishwash Chaudhari"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Text content - Second on mobile, first on desktop */}
            <div className="text-center md:text-left w-full md:w-1/2 order-last md:order-first px-6 sm:px-8 md:px-0">
              <TextAnimation text="Hi, I'm Bishwash Chaudhari" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.4
                }}
                className="mt-2 sm:mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto md:mx-0"
              >
                I&apos;m a{" "}
                <FlipWords
                  words={["Full Stack Developer", "AI/ML Enthusiast"]}
                  duration={4000}
                  className="text-blue-400"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.6
                }}
                className="mt-4 sm:mt-8"
              >
                <motion.button
                  onClick={() => setIsContactOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0.8
                  }}
                  className="bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2 mx-auto md:mx-0 text-sm sm:text-base"
                >
                  Let&apos;s Collaborate
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </SpotlightEffect>
      </div>

      <Contact isModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};
