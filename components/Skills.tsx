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
  IconBrandGithubFilled
} from "@tabler/icons-react";

const skills = [
  { icon: <IconBrandNextjs className="transition-colors duration-300 hover:text-gray-300" /> },
  { icon: <IconBrandReact className="transition-colors duration-300 hover:text-blue-400" /> },
  { icon: <IconBrandTypescript className="transition-colors duration-300 hover:text-blue-600" /> },
  { icon: <IconBrandTailwind className="transition-colors duration-300 hover:text-cyan-400" /> },
  { icon: <IconBrandNodejs className="transition-colors duration-300 hover:text-green-500" /> },
  { icon: <IconServer className="transition-colors duration-300 hover:text-gray-300" /> },
  { icon: <IconBrandMongodb className="transition-colors duration-300 hover:text-green-600" /> },
  { icon: <IconBrandGithubFilled className="transition-colors duration-300 hover:text-gray-200" /> },
  { icon: <IconBrandGit className="transition-colors duration-300 hover:text-orange-500" /> },
  { icon: <IconBrandVscode className="transition-colors duration-300 hover:text-blue-500" /> },
];

export function Skills() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">
        My Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-4 bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
          >
            {/* Render the Icon Component directly */}
            <div className="h-12 w-12 flex items-center justify-center [&>svg]:h-full [&>svg]:w-full [&>svg]:stroke-[1.5]">
              {skill.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}