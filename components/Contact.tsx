"use client";

import { useState, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2
    }
  }
};

const overlayVariants = {
  hidden: { opacity: 0 },
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

interface ContactProps {
  isModal?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

interface ContactFormProps {
  isModal?: boolean;
  onClose?: () => void;
}

const ContactForm = memo(({ isModal = false, onClose }: ContactFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(formRef.current!);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      setIsSubmitting(false);
      formRef.current?.reset();
      
      if (isModal && onClose) {
        setTimeout(onClose, 1000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      className={isModal ? "w-full max-w-xl mx-auto" : "max-w-xl mx-auto"}
    >
      <motion.div
        variants={fadeInUp}
        className="text-center mb-12 space-y-4"
      >
        <h2 className="text-4xl font-bold">Get in Touch</h2>
        <p className="text-zinc-400">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
      </motion.div>

      <motion.form
        ref={formRef}
        variants={fadeInUp}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
            required
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-white text-black rounded-lg font-medium relative overflow-hidden group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center justify-center space-x-2 group-hover:text-white transition-colors duration-300">
            <span>{isSubmitting ? "Sending..." : submitted ? "Sent!" : "Send Message"}</span>
            <Send className="w-4 h-4" />
          </span>
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ x: "100%" }}
            whileHover={{ x: "0%" }}
            transition={{ type: "tween", ease: "easeInOut" }}
          />
        </motion.button>
      </motion.form>
    </motion.div>
  );
});

ContactForm.displayName = "ContactForm";

export function Contact({ isModal = false, isOpen = false, onClose }: ContactProps) {
  if (isModal) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={onClose}
            />
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl mx-auto p-6 z-50"
            >
              <div className="relative bg-black/95 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <ContactForm isModal={isModal} onClose={onClose} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  return (
    <div className="container mx-auto px-16 md:px-16 pb-24" id="contact">
      <ContactForm isModal={isModal} onClose={onClose} />
    </div>
  );
} 