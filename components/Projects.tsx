import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

const projects = [
  {
    title: "Custom Admin Panel",
    category: "Full Stack Application",
    description:
      "A comprehensive backend administration dashboard built using server-side rendering. Manage users, analytics, and CRUD operations securely.",
    image: "/project-admin.jpg",
    stack: ["Node.js", "Express.js", "EJS", "MongoDB"],
    link: "https://github.com/MokshPShah/Node-Js/tree/main/Admin-Panel",
    featured: true,
    color: "from-violet-500 via-purple-500 to-blue-500",
  },
  {
    title: "AI Image Generator",
    category: "AI + Full Stack Application",
    description:
      "A web-based AI image generation app. Enter prompts to generate high-quality images instantly via API integration.",
    image: "/project-ai-image.png",
    stack: ["React.js", "REST API", "OpenAI API"],
    link: "https://github.com/MokshPShah/AI-Image-Generator",
    featured: false,
    color: "from-cyan-500 via-blue-500 to-indigo-500",
  },
  {
    title: "Chatbot AI",
    category: "AI Assistant Application",
    description:
      "An AI-powered chatbot that handles conversational flows. Features real-time response rendering and API message handling.",
    image: "/project-chatbot.png",
    stack: ["React.js", "REST API", "OpenAI API"],
    link: "https://github.com/MokshPShah/Chatbot-AI",
    featured: false,
    color: "from-orange-500 via-red-500 to-yellow-500",
  },
  {
    title: "React.js Collection",
    category: "Frontend Development",
    description:
      "A collection of projects covering core concepts like components, props, state, routing, and UI structure.",
    image: "/project-react.png",
    stack: ["React.js", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/MokshPShah/React-Js",
    featured: false,
    color: "from-emerald-500 via-green-500 to-lime-500",
  },
  {
    title: "Node.js Backend",
    category: "Backend Development",
    description:
      "Backend practice projects focused on REST APIs, routing, middleware, server setup, and database integration.",
    image: "/project-node.png",
    stack: ["Node.js", "Express.js", "MongoDB", "REST API"],
    link: "https://github.com/MokshPShah/Node-Js",
    featured: false,
    color: "from-pink-500 via-rose-500 to-red-500",
  },
];

export function Projects() {
  return (
    <div className="py-20 w-full">
      <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-10">
        Recent Projects
      </h2>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="h-[25rem] w-[20rem] flex items-center justify-center sm:w-96"
          >
            <PinContainer title={project.link} href={project.link}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {project.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 line-clamp-3">
                    {project.description}
                  </span>
                </div>
                
                {/* Visual Content Area */}
                <div
                  className={`flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br ${project.color} overflow-hidden relative group`}
                >
                  <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                   />
                   
                   {/* Fallback visual for now showing tech stack */}
                   <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="flex flex-wrap justify-center gap-2 px-4">
                        {project.stack.slice(0,3).map((tech, i) => (
                           <span key={i} className="px-2 py-1 bg-black/40 rounded text-xs text-white backdrop-blur-sm border border-white/10">
                             {tech}
                           </span>
                        ))}
                      </div>
                   </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}