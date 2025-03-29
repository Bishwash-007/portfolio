"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { projects, technologies } from "@/lib/constants";

const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9,
    rotateX: 5,
    perspective: 1000
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 1
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const categories = [...new Set(projects.map(project => project.category))];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = activeCategory
    ? projects.filter(project => project.category === activeCategory)
    : projects;

  return (
    <section className="pb-16 sm:pb-20 md:pb-24 lg:pb-32 -mt-16 sm:-mt-20 md:-mt-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-8 sm:mb-10 space-y-2 sm:space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto px-4 sm:px-6">
              A collection of projects that showcase my skills and experience in building modern web applications
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp} 
            className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12"
            layout
          >
            <motion.button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all relative`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`relative z-10 ${!activeCategory ? 'text-black' : 'text-zinc-400 hover:text-white'}`}>
                All
              </span>
              {!activeCategory && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-white rounded-full"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all relative`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={`relative z-10 ${activeCategory === category ? 'text-black' : 'text-zinc-400 hover:text-white'}`}>
                  {category}
                </span>
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-white rounded-full"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 perspective-1000"
            layout
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  exit={{ 
                    opacity: 0,
                    y: 20,
                    scale: 0.9,
                    transition: { duration: 0.2 }
                  }}
                  layout
                  custom={index}
                  className="group relative bg-white/5 rounded-2xl overflow-hidden cursor-pointer transform-gpu"
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden"
                  }}
                  onHoverStart={() => setHoveredProject(project.title)}
                  onHoverEnd={() => setHoveredProject(null)}
                  onClick={() => window.open(project.link, '_blank')}
                  whileHover={{
                    translateY: -10,
                    rotateX: 2,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut"
                    }
                  }}
                >
                  <motion.div 
                    className="relative h-64 w-full overflow-hidden bg-black/20"
                    initial={{ scale: 1.1, y: 20 }}
                    whileInView={{ scale: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      priority={index < 3}
                      quality={90}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'absolute inset-0 flex items-center justify-center bg-black/20';
                          fallback.innerHTML = `
                            <div class="text-center">
                              <svg class="w-12 h-12 mx-auto text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <p class="mt-2 text-sm text-white/60">${project.title}</p>
                            </div>
                          `;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                  </motion.div>

                  <motion.div 
                    className="p-6 space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.3,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                  >
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-zinc-400 text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => {
                        const technology = technologies.find(t => t.name === tech);
                        return (
                          <motion.span
                            key={tech}
                            className="px-2 py-1 bg-white/10 rounded-full text-xs font-medium text-zinc-400 flex items-center gap-1 hover:bg-white/20 transition-colors"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + (techIndex * 0.1) }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {technology && (
                              <Image
                                src={`/icons/${technology.icon}`}
                                alt={technology.name}
                                width={12}
                                height={12}
                                className="w-3 h-3 object-contain"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.display = 'none';
                                }}
                              />
                            )}
                            {tech}
                          </motion.span>
                        );
                      })}
                    </div>

                    <motion.div 
                      className="pt-4 flex items-center justify-between"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        <span>View Source</span>
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      transform: "translateZ(1px)"
                    }}
                    initial={false}
                    animate={{
                      opacity: hoveredProject === project.title ? 1 : 0
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center text-zinc-400 mt-8 sm:mt-12"
            >
              No projects found in this category.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
