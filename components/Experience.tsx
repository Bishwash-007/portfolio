"use client";

import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";

export const Experience = () => {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-gray-400 text-sm md:text-base font-normal mb-4">
            Currently working as a Full Stack Developer and AI/ML Enthusiast. 
            Specializing in building scalable web applications with React and React Native, 
            while integrating machine learning models using PyTorch for advanced AI features.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
              <h4 className="text-white font-medium mb-2">AI-Powered Web App</h4>
              <p className="text-gray-400 text-sm mb-4">
                Built a full-stack application with React frontend and Flask backend, 
                integrating PyTorch models for real-time image processing.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md text-xs">React</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-md text-xs">Flask</span>
                <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-md text-xs">PyTorch</span>
              </div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
              <h4 className="text-white font-medium mb-2">Mobile ML App</h4>
              <p className="text-gray-400 text-sm mb-4">
                Developed a React Native application with on-device machine learning capabilities, 
                providing real-time predictions without internet connectivity.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md text-xs">React Native</span>
                <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-md text-xs">PyTorch Mobile</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-md text-xs">TensorFlow Lite</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-gray-400 text-sm md:text-base font-normal mb-8">
            Focused on full-stack development and machine learning integration. 
            Built and deployed multiple applications using modern web technologies 
            and implemented various ML models for different use cases.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
              <h4 className="text-white font-medium mb-2">E-commerce Platform</h4>
              <p className="text-gray-400 text-sm mb-4">
                Developed a full-stack e-commerce platform with React frontend and Flask backend, 
                featuring real-time inventory management and payment processing.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md text-xs">React</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-md text-xs">Flask</span>
                <span className="px-2 py-1 bg-blue-600/20 text-blue-500 rounded-md text-xs">PostgreSQL</span>
              </div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
              <h4 className="text-white font-medium mb-2">ML Model Deployment</h4>
              <p className="text-gray-400 text-sm mb-4">
                Created a scalable ML model deployment system using PyTorch and Flask, 
                with real-time inference capabilities and model versioning.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-md text-xs">PyTorch</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-md text-xs">Flask</span>
                <span className="px-2 py-1 bg-blue-600/20 text-blue-500 rounded-md text-xs">Docker</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-gray-400 text-sm md:text-base font-normal mb-8">
            Started my journey in full-stack development and machine learning. 
            Built foundational projects and developed core skills in web development 
            and AI/ML technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
              <h4 className="text-white font-medium mb-2">Portfolio Website</h4>
              <p className="text-gray-400 text-sm mb-4">
                Created a modern portfolio website using React and Next.js, 
                showcasing projects and skills with a responsive design.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md text-xs">React</span>
                <span className="px-2 py-1 bg-black/20 text-gray-400 rounded-md text-xs">Next.js</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-md text-xs">Tailwind CSS</span>
              </div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
              <h4 className="text-white font-medium mb-2">ML Learning Projects</h4>
              <p className="text-gray-400 text-sm mb-4">
                Developed basic machine learning models using PyTorch, 
                including image classification and text analysis projects.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-md text-xs">PyTorch</span>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md text-xs">Python</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-md text-xs">NumPy</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-0">
            Experience & Projects
          </h2>
          <p className="text-gray-400 text-lg pt-2">
            My journey in development and machine learning
          </p>
        </motion.div>

        <div className="w-full">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  );
}; 