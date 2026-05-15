"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

// --- ALL PROJECTS DATA ---
const projects = [
  // FEATURED PROJECT
  {
    title: "Strenoxa E-Commerce",
    category: "Full Stack Platform",
    description:
      "A premium, full-scale e-commerce platform built for a gym supplements brand. Features global state management via Redux Toolkit, secure JWT authentication, and a fully integrated Razorpay payment gateway for seamless checkouts.",
    image: "/hero.png", // Update this with your actual strenoxa screenshot
    stack: ["Next.js", "Redux", "Razorpay", "MongoDB", "Tailwind CSS"],
    link: "https://github.com/MokshPShah/Strenoxa_E-Commerce",
    live: "https://strenoxa.vercel.app",
    featured: true,
  },
  // OTHER PROJECTS
  {
    title: "Inventory Management System",
    category: "Enterprise Dashboard",
    description:
      "A robust MERN stack inventory tracking system designed for enterprise scale. Includes secure role-based access control, real-time analytics, and Cloudinary integration.",
    image: "/inventory.png",
    stack: ["React.js", "Express.js", "Cloudinary", "MongoDB"],
    link: "https://github.com/MokshPShah/Inventory_Management",
    live: "https://inventory-management-two-mu.vercel.app",
    featured: false,
  },
  {
    title: "Custom Admin Panel",
    category: "Backend Architecture",
    description:
      "A blazing-fast, server-side rendered administration dashboard built with EJS. Designed using a strict MVC architecture to securely manage users, categories, and perform CRUD operations.",
    image: "/project-admin.jpg",
    stack: ["Node.js", "Express.js", "EJS", "MongoDB"],
    link: "https://github.com/MokshPShah/Node-Js/tree/main/Admin-Panel",
    live: "#",
    featured: false,
  },
  {
    title: "Chatbot AI",
    category: "Intelligent Interface",
    description:
      "An intelligent conversational interface powered by the Google Gemini API. Built from the ground up with React and Vite, featuring robust prompt handling and real-time typing effects.",
    image: "/project-chatbot.png",
    stack: ["React.js", "Gemini API", "Vite", "Tailwind"],
    link: "https://github.com/MokshPShah/Chatbot-AI",
    live: "https://mchatbot.netlify.app",
    featured: false,
  },
  {
    title: "Movie Database Portal",
    category: "Web Application",
    description:
      "A movie browsing application where users can discover films, view detailed descriptions, and manage movie data using a custom backend architecture.",
    image: "/movies.png",
    stack: ["Node.js", "Express.js", "EJS", "MongoDB"],
    link: "https://github.com/MokshPShah/Node-Js/tree/main/Movie-Project",
    live: "#",
    featured: false,
  },
  {
    title: "AI Image Generator",
    category: "AI Integration",
    description:
      "A web-based AI image generation app where users can enter prompts and generate high-quality images instantly. Built to demonstrate real-world AI integration.",
    image: "/project-ai-image.png",
    stack: ["React.js", "REST API", "OpenAI API"],
    link: "https://github.com/MokshPShah/AI-Image-Generator",
    live: "https://genximage.netlify.app/",
    featured: false,
  },
  {
    title: "React.js Components Library",
    category: "Frontend Development",
    description:
      "A collection of React.js projects covering core frontend concepts like components, props, state management, routing, and UI structure.",
    image: "/project-react.png",
    stack: ["React.js", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/MokshPShah/React-Js",
    live: "#",
    featured: false,
  },
  {
    title: "Node.js API Microservices",
    category: "Backend Development",
    description:
      "A set of Node.js projects focused on backend development fundamentals like REST APIs, routing, middleware, server setup, and database integration.",
    image: "/project-node.png",
    stack: ["Node.js", "Express.js", "MongoDB", "REST API"],
    link: "https://github.com/MokshPShah/Node-Js",
    live: "#",
    featured: false,
  },
];

export default function ProjectContent() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative pb-20">

      {/* 1. HEADER (LAMP EFFECT) */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-20 relative z-10 space-y-32">

        {/* 2. FEATURED PROJECT: STRENOXA */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm font-semibold mb-8 shadow-sm">
              <span className="h-2 w-2 bg-white rounded-full animate-ping mr-1" />
              Flagship Project
            </div>

            <div className="group relative w-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-md rounded-[2rem] overflow-hidden hover:border-neutral-600 transition-all duration-700 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                {/* Visual Section */}
                <div className="relative h-72 lg:h-auto overflow-hidden bg-black">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-neutral-900/90 hidden lg:block z-10" />
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-20">
                  <span className="text-sm font-mono text-neutral-400 uppercase tracking-widest mb-4 block">
                    {featuredProject.category}
                  </span>

                  <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                    {featuredProject.title}
                  </h3>

                  <p className="text-neutral-400 leading-relaxed mb-8 text-lg">
                    {featuredProject.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    {featuredProject.stack.map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-black/50 rounded-lg text-sm font-medium text-neutral-300 border border-neutral-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* DYNAMIC HERO BUTTONS */}
                  <div className="flex flex-wrap gap-4 mt-auto">
                    {featuredProject.live && featuredProject.live !== "#" && (
                      <Link
                        href={featuredProject.live}
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-all duration-300 cursor-pointer"
                      >
                        Live Preview <ExternalLink size={20} />
                      </Link>
                    )}
                    <Link
                      href={featuredProject.link}
                      target="_blank"
                      className={`inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-xl transition-all duration-300 cursor-pointer ${featuredProject.live && featuredProject.live !== "#"
                        ? "bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800"
                        : "bg-white text-black hover:bg-neutral-200"
                        }`}
                    >
                      Source Code <Github size={20} />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}

        {/* 3. OTHER PROJECTS BENTO GRID */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              More Repositories
            </h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-neutral-800 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* 4. FINAL CALL TO ACTION */}
        <div className="mt-32 mb-20 text-center bg-neutral-900/30 border border-neutral-800 shadow py-16 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have a project in mind?
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-lg">
            I am currently open to <strong>freelance work</strong> and <strong>job</strong> opportunities.
            Let's discuss how I can contribute to your team.
          </p>
          <Link
            href="/contact"
            className="inline-flex animate-shimmer items-center justify-center"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="rounded-full border-white/20 text-white hover:bg-white/10 cursor-pointer flex items-center space-x-2"
            >
              <span>Let's Connect</span>
              <ArrowRight className="h-4 w-4" />
            </HoverBorderGradient>
          </Link>
        </div>

      </div>
    </div>
  );
}

// --- SUB-COMPONENT: BENTO CARD ---
function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative flex flex-col h-full justify-between border border-neutral-800 bg-neutral-900/30 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-neutral-600 hover:bg-neutral-900/80 transition-all duration-500 cursor-default"
    >
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-white/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Image Area */}
      <div className="relative h-56 w-full overflow-hidden border-b border-neutral-800 bg-black">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent" />
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow relative z-10">
        <div className="mb-auto">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3 block">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-white mb-3 transition-colors">
            {project.title}
          </h3>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6 mb-8">
          {project.stack.slice(0, 3).map((t: string) => (
            <span key={t} className="text-xs font-medium text-neutral-300 bg-neutral-800/50 border border-neutral-800 px-3 py-1.5 rounded-md">
              {t}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="text-xs font-medium text-neutral-500 bg-transparent px-2 py-1.5">
              +{project.stack.length - 3} more
            </span>
          )}
        </div>

        {/* DYNAMIC CARD FOOTER */}
        <div className="flex items-center justify-between w-full pt-6 border-t border-neutral-800 mt-auto">
          <Link
            href={project.link}
            target="_blank"
            className="flex items-center gap-2 text-sm font-semibold text-neutral-400 hover:text-white transition-colors group/git cursor-pointer"
          >
            <Github size={18} className="group-hover/git:text-white transition-colors" />
            Source Code
          </Link>

          {project.live !== "#" && (
            <Link
              href={project.live}
              target="_blank"
              className="flex items-center gap-1.5 text-sm font-bold text-neutral-300 hover:text-white transition-colors group/live cursor-pointer"
            >
              Live Demo
              <ExternalLink size={16} className="group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}