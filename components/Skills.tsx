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

// Added your missing tools: Framer Motion, Firebase, Redux, and REST APIs
const skills = [
  { icon: <IconBrandHtml5 className="transition-colors duration-300 group-hover:text-orange-500" />, title: "HTML 5" },
  { icon: <IconBrandCss3 className="transition-colors duration-300 group-hover:text-blue-500" />, title: "CSS 3" },
  { icon: <IconBrandJavascript className="transition-colors duration-300 group-hover:text-yellow-400" />, title: "JavaScript" },
  { icon: <IconBrandTypescript className="transition-colors duration-300 group-hover:text-blue-600" />, title: "TypeScript" },
  { icon: <IconBrandReact className="transition-colors duration-300 group-hover:text-cyan-400" />, title: "React.js" },
  { icon: <IconBrandNextjs className="transition-colors duration-300 group-hover:text-white" />, title: "Next.js" },
  { icon: <IconBrandRedux className="transition-colors duration-300 group-hover:text-purple-500" />, title: "Redux Toolkit" },
  { icon: <IconBrandTailwind className="transition-colors duration-300 group-hover:text-teal-400" />, title: "Tailwind CSS" },
  { icon: <IconBrandBootstrap className="transition-colors duration-300 group-hover:text-violet-500" />, title: "Bootstrap" },
  { icon: <IconBrandNodejs className="transition-colors duration-300 group-hover:text-emerald-500" />, title: "Node.js" },
  { icon: <IconServer className="transition-colors duration-300 group-hover:text-gray-300" />, title: "Express.js" },
  { icon: <IconApi className="transition-colors duration-300 group-hover:text-blue-400" />, title: "REST APIs" },
  { icon: <IconBrandMongodb className="transition-colors duration-300 group-hover:text-green-500" />, title: "MongoDB" },
  { icon: <IconBrandFirebase className="transition-colors duration-300 group-hover:text-orange-400" />, title: "Firebase" },
  { icon: <IconBrandGit className="transition-colors duration-300 group-hover:text-orange-500" />, title: "Git" },
  { icon: <IconBrandGithubFilled className="transition-colors duration-300 group-hover:text-white" />, title: "GitHub" },
  { icon: <IconBrandVscode className="transition-colors duration-300 group-hover:text-blue-500" />, title: "VS Code" },
];

export function Skills() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-24">

      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Tech <span className="text-[#3B82F6]">Stack</span>
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          The core tools, languages, and frameworks I use to build scalable web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5 }}
            className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-[#111827] border border-white/5 hover:border-[#3B82F6]/50 hover:bg-[#1F2937]/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 cursor-pointer"
          >
            {/* Icon Container */}
            <div className="h-12 w-12 flex items-center justify-center text-neutral-500 [&>svg]:h-full [&>svg]:w-full [&>svg]:stroke-[1.5] group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>

            {/* Skill Title */}
            <span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors duration-300">
              {skill.title}
            </span>
          </motion.div>
        ))}
      </div>

    </div>
  );
}