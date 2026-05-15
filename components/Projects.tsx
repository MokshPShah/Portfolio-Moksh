"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ShoppingCart, Database, LayoutDashboard, Bot } from "lucide-react";
import Link from "next/link";

// --- PROJECT DATA ---
const projects = [
  {
    id: "01",
    title: "Strenoxa E-Commerce",
    category: "Full Stack Platform",
    description:
      "A premium, full-scale e-commerce platform built for a gym supplements brand. Features global state management via Redux Toolkit, secure JWT authentication, and a fully integrated Razorpay payment gateway for seamless checkouts.",
    stack: ["Next.js", "Redux", "Razorpay", "MongoDB", "Tailwind"],
    github: "https://github.com/MokshPShah/Strenoxa_E-Commerce",
    live: "https://strenoxa.vercel.app",
    icon: ShoppingCart,
    accent: "from-blue-600 to-indigo-600",
    textAccent: "text-blue-500",
  },
  {
    id: "02",
    title: "Inventory Management",
    category: "Enterprise Dashboard",
    description:
      "A robust MERN stack inventory tracking system designed for enterprise scale. Includes secure role-based access control, real-time analytics, and seamless Cloudinary integration for efficient product image management.",
    stack: ["React.js", "Express.js", "Cloudinary", "MongoDB"],
    github: "https://github.com/MokshPShah/Inventory_Management",
    live: "https://inventory-management-two-mu.vercel.app",
    icon: Database,
    accent: "from-emerald-500 to-teal-600",
    textAccent: "text-emerald-500",
  },
  {
    id: "03",
    title: "Custom Admin Panel",
    category: "Backend Architecture",
    description:
      "A blazing-fast, server-side rendered administration dashboard built with EJS. Designed using a strict MVC architecture to securely manage users, categories, and perform full CRUD operations directly from a centralized interface.",
    stack: ["Node.js", "Express.js", "EJS", "MongoDB"],
    github: "https://github.com/MokshPShah/Admin-Panel",
    live: "#",
    icon: LayoutDashboard,
    accent: "from-purple-500 to-violet-600",
    textAccent: "text-purple-500",
  },
  {
    id: "04",
    title: "Chatbot AI",
    category: "Intelligent Interface",
    description:
      "An intelligent conversational interface powered by the Google Gemini API. Built from the ground up with React and Vite, featuring robust prompt handling, persistent context management, and a highly responsive UI.",
    stack: ["React.js", "Gemini API", "Vite", "Tailwind CSS"],
    github: "https://github.com/MokshPShah/Chatbot-AI",
    live: "https://mchatbot.netlify.app",
    icon: Bot,
    accent: "from-cyan-500 to-blue-600",
    textAccent: "text-cyan-500",
  },
];

export function Projects() {
  return (
    <div className="w-full bg-[#0A0A0A] py-32 relative z-10 font-sans">

      {/* --- SECTION HEADER --- */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6">
          Selected <br className="md:hidden" /> <span className="text-[#3B82F6]">Works.</span>
        </h2>
        <div className="w-24 h-1 bg-[#3B82F6] rounded-full mb-8"></div>
        <p className="text-neutral-400 text-xl max-w-2xl leading-relaxed">
          A showcase of my expertise in building scalable architectures, intelligent interfaces, and robust full-stack systems.
        </p>
      </div>

      {/* --- PROJECTS LIST --- */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-32">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          const Icon = project.icon;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${!isEven ? "lg:flex-row-reverse" : ""
                }`}
            >

              {/* --- VISUAL AREA (Left on Even, Right on Odd) --- */}
              <div className="w-full lg:w-1/2 aspect-[4/3] relative group rounded-[2rem] overflow-hidden bg-[#111827] border border-white/5 flex items-center justify-center shadow-2xl">

                {/* Dynamic Gradient Glow Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br ${project.accent} blur-[100px] opacity-30 group-hover:opacity-60 transition-opacity duration-700 rounded-full`} />

                {/* Main Icon (Replace with <Image /> when you have screenshots) */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="relative z-10 text-white/80 group-hover:text-white transition-colors duration-500 drop-shadow-2xl"
                >
                  <Icon size={120} strokeWidth={1.5} />
                </motion.div>

              </div>

              {/* --- CONTENT AREA --- */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">

                {/* Project Number & Category */}
                <div className="flex items-center gap-4 mb-6">
                  <span className={`text-6xl font-black opacity-20 ${project.textAccent}`}>
                    {project.id}
                  </span>
                  <span className="text-sm font-mono text-neutral-500 uppercase tracking-widest mt-2">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-10">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-12">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium text-neutral-300 border border-white/5 hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links / Buttons */}
                <div className="flex flex-wrap gap-6">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors group"
                  >
                    <Github size={20} className="group-hover:scale-110 transition-transform" />
                    <span>View Source</span>
                  </Link>

                  {project.live !== "#" && (
                    <Link
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors group"
                    >
                      <ExternalLink size={20} className="group-hover:scale-110 transition-transform" />
                      <span>Live Demo</span>
                    </Link>
                  )}
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}