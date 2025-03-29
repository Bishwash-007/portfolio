"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Star, Quote, ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/constants";


export function Testimony() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleImageError = (name: string) => {
    setImageErrors(prev => ({ ...prev, [name]: true }));
  };

  // Calculate total width of testimonials for proper animation
  const cardWidth = 450; // width of each card
  const cardGap = 48; // gap between cards (12 * 4)
  const totalCards = testimonials.length;
  const totalWidth = (cardWidth + cardGap) * totalCards;

  return (
    <section ref={containerRef} className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 bg-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-16 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Client Testimonials</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto px-4 sm:px-0">
            What people say about working with me
          </p>
        </motion.div>

        <div className="relative w-full max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-3rem)] md:max-w-[90vw] mx-auto">
          <motion.div style={{ opacity }} className="relative">
            <motion.div
              className="flex gap-8 md:gap-12 pl-4"
              animate={{
                x: [-20, -totalWidth - 20]
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 0
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${index}`}
                  className="flex-shrink-0 w-[300px] md:w-[450px] bg-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm cursor-pointer relative group"
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <Quote className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-8 h-8 md:w-12 md:h-12 text-white/20 group-hover:text-white/30 transition-colors" />
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-white/20 transition-colors bg-zinc-800">
                        {!imageErrors[testimonial.name] ? (
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            sizes="(max-width: 56px) 100vw, 56px"
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            onError={() => handleImageError(testimonial.name)}
                            priority={index < 2}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-zinc-600 text-lg">
                            {testimonial.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-base md:text-lg">{testimonial.name}</h3>
                        <div>
                          <p className="text-xs md:text-sm text-zinc-400">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-zinc-300 italic mb-4 md:mb-6 text-base md:text-lg leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <motion.div
                        className="text-white/40 group-hover:text-white/60 transition-colors"
                        animate={{
                          x: hoveredIndex === index ? 5 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0"
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
