"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandGit,
  IconBrandVscode,
  IconServer,
  IconBrandGithubFilled,
  IconBrandBootstrap,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandFramer,
  IconBrandFirebase,
  IconBrandRedux,
  IconApi
} from "@tabler/icons-react";

// --- TECH STACK DATA WITH BRAND HOVER COLORS ---
const skills = [
  { icon: <IconBrandHtml5 className="transition-colors duration-300 group-hover:text-orange-500" />, title: "HTML 5" },
  { icon: <IconBrandCss3 className="transition-colors duration-300 group-hover:text-blue-500" />, title: "CSS 3" },
  { icon: <IconBrandTailwind className="transition-colors duration-300 group-hover:text-cyan-400" />, title: "Tailwind CSS" },
  { icon: <IconBrandBootstrap className="transition-colors duration-300 group-hover:text-purple-500" />, title: "Bootstrap" },
  { icon: <IconBrandJavascript className="transition-colors duration-300 group-hover:text-yellow-400" />, title: "JavaScript" },
  { icon: <IconBrandReact className="transition-colors duration-300 group-hover:text-cyan-400" />, title: "React.js" },
  { icon: <IconBrandTypescript className="transition-colors duration-300 group-hover:text-blue-500" />, title: "TypeScript" },
  { icon: <IconBrandNextjs className="transition-colors duration-300 group-hover:text-white" />, title: "Next.js" },
  { icon: <IconBrandRedux className="transition-colors duration-300 group-hover:text-purple-400" />, title: "Redux Toolkit" },
  { icon: <IconBrandNodejs className="transition-colors duration-300 group-hover:text-green-500" />, title: "Node.js" },
  { icon: <IconServer className="transition-colors duration-300 group-hover:text-neutral-200" />, title: "Express.js" },
  { icon: <IconApi className="transition-colors duration-300 group-hover:text-emerald-400" />, title: "REST APIs" },
  { icon: <IconBrandMongodb className="transition-colors duration-300 group-hover:text-green-500" />, title: "MongoDB" },
  { icon: <IconBrandFirebase className="transition-colors duration-300 group-hover:text-yellow-500" />, title: "Firebase" },
  { icon: <IconBrandGit className="transition-colors duration-300 group-hover:text-orange-600" />, title: "Git" },
  { icon: <IconBrandGithubFilled className="transition-colors duration-300 group-hover:text-white" />, title: "GitHub" },
  { icon: <IconBrandVscode className="transition-colors duration-300 group-hover:text-blue-500" />, title: "VS Code" },
];

export function Skills() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-24 relative z-10">

      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Tech Stack
        </h2>
        <div className="w-20 h-[1px] bg-neutral-800 mx-auto mb-6" />
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
          The core tools, languages, and frameworks I use to build scalable, high-performance web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (index % 9) * 0.05 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 hover:bg-neutral-900/80 hover:border-neutral-600 transition-all duration-300 cursor-pointer"
          >
            {/* Icon Container */}
            <div className="h-10 w-10 flex items-center justify-center text-neutral-500 [&>svg]:h-full [&>svg]:w-full [&>svg]:stroke-[1.5] group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>

            {/* Title (Stays clean white on hover so it remains readable) */}
            <span className="text-sm font-medium text-neutral-500 group-hover:text-neutral-200 transition-colors duration-300 text-center">
              {skill.title}
            </span>
          </motion.div>
        ))}
      </div>

    </div>
  );
}