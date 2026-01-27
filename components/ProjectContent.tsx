"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Code2, Github, Layers, Terminal } from "lucide-react";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";

// --- DATA ---
const projects = [
  {
    title: "Custom Admin Panel",
    category: "Full Stack Application",
    description:
      "A comprehensive backend administration dashboard built using server-side rendering. It allows admins to manage users, view system analytics, and perform full CRUD operations directly from a secure interface. Designed for speed and SEO efficiency.",
    image: "/project-admin.jpg",
    stack: ["Node.js", "Express.js", "EJS", "MongoDB"],
    link: "https://github.com/MokshPShah/Node-Js/tree/main/Admin-Panel",
    featured: true,
  },
  {
    title: "AI Image Generator",
    category: "AI + Full Stack Application",
    description:
      "A web-based AI image generation app where users can enter prompts and generate high-quality images instantly. Includes a clean UI, prompt handling, and API integration to fetch and render generated images smoothly. Built to demonstrate real-world AI integration in a modern frontend workflow.",
    image: "/project-ai-image.png",
    stack: ["React.js", "REST API", "OpenAI API"],
    link: "https://github.com/MokshPShah/AI-Image-Generator",
    featured: false,
  },
  {
    title: "Chatbot AI",
    category: "AI Assistant Application",
    description:
      "An AI-powered chatbot application that takes user queries and returns smart, conversational responses. Designed with a simple chat UI and backend logic to handle message flow, API calls, and response rendering in real time. Shows strong fundamentals of building interactive AI tools.",
    image: "/project-chatbot.png",
    stack: ["React.js", "REST API", "OpenAI API"],
    link: "https://github.com/MokshPShah/Chatbot-AI",
    featured: false,
  },
  {
    title: "React.js Mini Projects Collection",
    category: "Frontend Development",
    description:
      "A collection of React.js projects covering core frontend concepts like components, props, state management, routing, and UI structure. Useful for showcasing your practical React skills with multiple working examples and clean code organization.",
    image: "/project-react.png",
    stack: ["React.js", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/MokshPShah/React-Js",
    featured: false,
  },
  {
    title: "Node.js Backend Practice Projects",
    category: "Backend Development",
    description:
      "A set of Node.js projects focused on backend development fundamentals like REST APIs, routing, middleware, server setup, and database integration. Great for demonstrating your backend knowledge and ability to build scalable server-side applications.",
    image: "/project-node.png",
    stack: ["Node.js", "Express.js", "MongoDB", "REST API"],
    link: "https://github.com/MokshPShah/Node-Js",
    featured: false,
  },
];


// --- MAIN PAGE COMPONENT ---
export default function ProjectContent() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative pb-20">

      {/* 1. HEADER */}
      <LampContainer className="pt-36 h-[40vh]">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          My Work
        </motion.h1>
      </LampContainer>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10 space-y-20">

        {/* 2. FEATURED PROJECT (HERO) */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-2">
              <span className="h-2 w-2 bg-blue-500 rounded-full animate-pulse" />
              Featured Project
            </h2>

            <div className="group relative w-full border border-white/10 bg-neutral-900/50 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-colors duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                {/* Image Section */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/20">
                      {featuredProject.category}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    <Link href={featuredProject.link} target="_blank">
                      {featuredProject.title}
                    </Link>
                  </h3>

                  <p className="text-neutral-400 leading-relaxed mb-8 text-lg">
                    <Link href={featuredProject.link} target="_blank">
                      {featuredProject.description}
                    </Link>
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.stack.map((tech) => (
                      <span key={tech} className="text-sm text-neutral-500 flex items-center gap-1">
                        <Layers size={14} /> {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href={featuredProject.link}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors"
                    >
                      View Project <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 3. OTHER PROJECTS GRID */}
        <div>
          <h2 className="text-2xl text-white font-bold mb-8">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* 4. FINAL CALL TO ACTION */}
        <div className="mt-32 mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have a project in mind?
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-8 text-lg">
            I am currently open to freelance work and internship opportunities.
            Let's discuss how I can contribute to your team.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Contact Me
          </Link>
        </div>

      </div>
    </div>
  );
}

// --- SUB-COMPONENT: SIMPLE CARD ---
function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between border border-white/10 bg-neutral-900/30 rounded-2xl overflow-hidden hover:bg-neutral-900/80 hover:border-white/20 transition-all duration-300"
    >
      {/* Image Area */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />
      </div>

      {/* Text Area */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-auto">
          <span className="text-xs font-mono text-blue-400 mb-2 block">
            {project.category}
          </span>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            <Link href={project.link} target="_blank">
              {project.title}
            </Link>
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-3">
            <Link href={project.link} target="_blank">
              {project.description}
            </Link>
          </p>
        </div>

        {/* Footer Area */}
        <div className="pt-4 border-t border-white/5 mt-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.slice(0, 3).map((t: string) => (
              <span key={t} className="text-xs text-neutral-600 bg-white/5 px-2 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
          <Link
            href={project.link}
            target="_blank"
            className="flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors"
          >
            <Github size={16} /> View Code
          </Link>
        </div>
      </div>
    </motion.div>
  );
}