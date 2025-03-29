"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, personalDetails } from "@/lib/constants";
import { Contact } from "./Contact";

const navVariants = {
  hidden: { 
    y: -100, 
    opacity: 0,
    filter: "blur(12px)",
    scale: 0.95
  },
  visible: { 
    y: 0, 
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 70,
      damping: 20,
      mass: 1.5,
      delay: 0.2
    }
  }
};

const overlayVariants = {
  hidden: { 
    opacity: 0,
    transition: {
      duration: 0.2
    }
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.2
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: -20,
    filter: "blur(8px)",
    scale: 0.9
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      delay: i * 0.08 + 0.3,
      type: "spring",
      stiffness: 120,
      damping: 14,
      mass: 1.2
    }
  })
};

const mobileMenuVariants = {
  hidden: { 
    opacity: 0,
    clipPath: "circle(0% at 95% 5%)",
    filter: "blur(12px)",
    scale: 0.95,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 350,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  visible: { 
    opacity: 1,
    clipPath: "circle(170% at 95% 5%)",
    filter: "blur(0px)",
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 350,
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const mobileItemVariants = {
  hidden: { 
    opacity: 0, 
    x: -20,
    filter: "blur(8px)",
    scale: 0.9
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      delay: i * 0.08,
      type: "spring",
      stiffness: 120,
      damping: 14,
      mass: 1.2
    }
  })
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => ({
        section: item.href.substring(1),
        element: document.getElementById(item.href.substring(1))
      }));

      let maxVisibility = 0;
      let mostVisibleSection = activeSection;

      sections.forEach(({ section, element }) => {
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const sectionVisibility = Math.max(0, visibleHeight / element.offsetHeight);

        if (sectionVisibility > maxVisibility) {
          maxVisibility = sectionVisibility;
          mostVisibleSection = section;
        }
      });

      if (mostVisibleSection !== activeSection) {
        setActiveSection(mostVisibleSection);
      }
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    handleScroll();
    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [activeSection, mounted]);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const NavbarContent = () => (
    <nav className="container mx-auto px-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="#home" className="text-white font-bold text-xl">
          {personalDetails.name}
        </a>
        <div className="md:hidden">
          <Menu className="w-6 h-6 text-white" />
        </div>
      </div>
    </nav>
  );

  if (typeof window === 'undefined') {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-6">
        <NavbarContent />
      </header>
    );
  }

  return (
    <>
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-1000",
          isScrolled 
            ? "bg-black/70 backdrop-blur-xl py-4" 
            : "bg-transparent py-6"
        )}
      >
        <nav className="container mx-auto px-6">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleClick("#home");
              }}
              className="text-white font-bold text-xl relative group"
              whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 450, damping: 15, mass: 1.2 }}
            >
              <span className="relative z-10">
                {personalDetails.name}
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-3">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.name}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  onHoverStart={() => setIsHovered(item.name)}
                  onHoverEnd={() => setIsHovered(null)}
                  onClick={() => handleClick(item.href)}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-500",
                    activeSection === item.href.substring(1)
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  )}
                >
                  {item.name}
                  <motion.span
                    className="absolute inset-0 rounded-full bg-white/10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: activeSection === item.href.substring(1) || isHovered === item.name ? 1 : 0,
                      opacity: activeSection === item.href.substring(1) ? 0.3 : isHovered === item.name ? 0.15 : 0
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                </motion.button>
              ))}

              <motion.button
                onClick={() => setIsContactOpen(true)}
                className="flex items-center px-5 py-2 bg-white text-black rounded-full text-sm font-medium group relative overflow-hidden"
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 450, damping: 15, mass: 1.2 }}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">Contact Me</span>
                <motion.div
                  className="absolute inset-0 bg-black"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 450, damping: 15, mass: 1.2 }}
              aria-label="Toggle menu"
            >
              <motion.span
                className="absolute w-6 h-6 text-white"
                initial={false}
                animate={{ 
                  rotate: isOpen ? 180 : 0,
                  scale: isOpen ? 1.1 : 1
                }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              >
                {isOpen ? <X /> : <Menu />}
              </motion.span>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-[72px] left-0 right-0 z-40 bg-black/90 backdrop-blur-xl md:hidden"
            >
              <nav className="container mx-auto px-6 py-8">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item, i) => (
                    <motion.button
                      key={item.name}
                      custom={i}
                      variants={mobileItemVariants}
                      onClick={() => {
                        handleClick(item.href);
                        setIsOpen(false);
                      }}
                      className={cn(
                        "relative px-6 py-4 rounded-xl text-left text-base font-medium transition-all duration-500",
                        activeSection === item.href.substring(1)
                          ? "text-white bg-white/10"
                          : "text-zinc-400 hover:text-white hover:bg-white/5"
                      )}
                      whileHover={{ x: 4, filter: "brightness(1.1)" }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-white/10"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: activeSection === item.href.substring(1) ? 1 : 0,
                          opacity: activeSection === item.href.substring(1) ? 0.3 : 0
                        }}
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      />
                    </motion.button>
                  ))}
                  
                  <motion.button
                    custom={navItems.length}
                    variants={mobileItemVariants}
                    onClick={() => {
                      setIsOpen(false);
                      setIsContactOpen(true);
                    }}
                    className="relative px-6 py-4 rounded-xl text-left text-base font-medium bg-white text-black transition-all duration-500 mt-4"
                    whileHover={{ x: 4, filter: "brightness(1.1)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className="relative z-10">Contact Me</span>
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-black"
                      initial={{ x: "100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                    />
                  </motion.button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Contact isModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
} 