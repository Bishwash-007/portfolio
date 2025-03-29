"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Projects } from "./Projects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { timelineData } from "@/lib/constants";

export const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  const { scrollYProgress } = useScroll(); // Ensure it is a MotionValue<number>
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const TimelineContent = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Experience
        </h2>
        <p className="text-gray-400 text-lg">
          My journey in software development
        </p>
      </div>
      <div className="space-y-8">
        {timelineData.map((item) => (
          <div key={item.year} className="group">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex flex-col md:flex-row">
                <div className="relative h-48 md:h-full md:w-1/3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 md:w-2/3">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary hover:bg-primary/30"
                    >
                      {item.year}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{item.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="hover:bg-secondary/80 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );

  // Server-side render
  if (typeof window === "undefined") {
    return (
      <section className="py-20 bg-black relative z-0">
        <TimelineContent />
        <Projects />
      </section>
    );
  }

  // Client-side render
  return (
    <section ref={containerRef} className="py-20 bg-black relative z-0">
      <motion.div style={{ opacity }}>
        <TimelineContent />
      </motion.div>
      <Projects />
    </section>
  );
};
