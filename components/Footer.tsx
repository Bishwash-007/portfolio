"use client";

import { motion } from "framer-motion";
import { Github, Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { personalDetails } from "@/lib/constants";

const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95,
    filter: "blur(8px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

const iconVariants = {
  initial: { scale: 1, filter: "brightness(1)" },
  hover: { 
    scale: 1.15, 
    filter: "brightness(1.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
      mass: 1
    }
  },
  tap: { 
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
      mass: 1
    }
  }
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
              }
            }
          }}
          className="flex flex-col items-center space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center space-x-6 md:space-x-8"
          >
            <motion.a
              href={personalDetails.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white transition-colors relative group"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Github className="w-5 h-5" />
              <motion.div
                className="absolute inset-0 bg-white/5 rounded-full -z-10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/bishwash-chaudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white transition-colors relative group"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Linkedin className="w-5 h-5" />
              <motion.div
                className="absolute inset-0 bg-white/5 rounded-full -z-10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
            </motion.a>
            <motion.a
              href={personalDetails.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white transition-colors relative group"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Facebook className="w-5 h-5" />
              <motion.div
                className="absolute inset-0 bg-white/5 rounded-full -z-10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
            </motion.a>
            <motion.a
              href={personalDetails.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white transition-colors relative group"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Instagram className="w-5 h-5" />
              <motion.div
                className="absolute inset-0 bg-white/5 rounded-full -z-10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
            </motion.a>
            <motion.a
              href={`mailto:${personalDetails.email}`}
              className="p-2 text-zinc-400 hover:text-white transition-colors relative group"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Mail className="w-5 h-5" />
              <motion.div
                className="absolute inset-0 bg-white/5 rounded-full -z-10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="text-center"
          >
            <p className="text-zinc-400 text-sm">
              © {currentYear} {personalDetails.name}. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
