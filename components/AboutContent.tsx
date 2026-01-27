"use client";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { GraduationCap, Code2 } from "lucide-react";
import Link from "next/link";
import { IconBulbFilled } from "@tabler/icons-react";

export default function AboutContent() {

    // Define the Timeline Data
    const data = [
        {
            title: "Current Focus",
            content: (
                <div className="space-y-8">
                    <p className="text-neutral-300 text-sm md:text-base font-normal mb-4">
                        I am currently balancing my formal degree with specialized skill development to become a holistic developer.
                    </p>

                    {/* Card 1: University */}
                    <div className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-xl flex gap-4 items-start">
                        <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                            <GraduationCap className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-1">Vidhyadeep University</h4>
                            <p className="text-blue-400 text-sm font-medium mb-2">B.Sc. IT (Bachelor of Science in Information Technology)</p>
                            <p className="text-neutral-400 text-sm">
                                Pursuing my graduation (2024 - 2027). Building a strong theoretical foundation in Computer Science, Database Management, and Software Engineering.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Skill Course */}
                    <div className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-xl flex gap-4 items-start">
                        <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                            <Code2 className="h-5 w-5 text-emerald-500" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-1">Red & White Institute</h4>
                            <p className="text-emerald-400 text-sm font-medium mb-2">Full Stack Development Course</p>
                            <p className="text-neutral-400 text-sm">
                                A specialized skill development program focusing on the MERN stack (MongoDB, Express, React, Node.js), practical project building, and industry standards.
                            </p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Late 2025",
            content: (
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-3 w-3 rounded-full bg-purple-500" />
                        <h4 className="text-xl font-bold text-white">Learning React.js</h4>
                    </div>
                    <p className="text-neutral-300 text-sm md:text-base font-normal">
                        After learning the basics of JavaScript, I started using modern tools to build real websites. I focused on <strong>React.js</strong> to make my projects faster and more interactive.
                    </p>
                    <div className="mt-4 bg-neutral-900 p-3 rounded-lg border border-neutral-800">
                        <h5 className="text-white text-xs font-bold mb-2 flex items-center gap-1"> <IconBulbFilled className="text-yellow-300" /> What I Learned</h5>
                        <ul className="list-disc list-inside text-neutral-500 text-xs space-y-1">
                            <li>Built my first dynamic website using <strong>React</strong>.</li>
                            <li>Started learning <strong>Next.js</strong> to improve website performance.</li>
                            <li>Learned how to break down complex designs into small, reusable components.</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="h-5 w-5 text-neutral-400" />
                        <h4 className="text-xl font-bold text-white">Higher Secondary (H.S.C)</h4>
                    </div>
                    <p className="text-neutral-300 text-sm md:text-base font-normal">
                        Completed my 12th Grade education with distinction.
                    </p>
                    <p className="text-neutral-400 text-sm mt-2">
                        This was the year I decided to pivot fully into technology. I started learning <strong>C Language</strong> and <strong>Basic Python</strong> to understand programming logic before college.
                    </p>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                        <h4 className="text-xl font-bold text-white">The Logic Phase</h4>
                    </div>
                    <p className="text-neutral-300 text-sm md:text-base font-normal">
                        While studying for school, I spent my nights learning <strong>JavaScript</strong>.
                    </p>
                    <ul className="list-disc list-inside text-neutral-400 text-sm mt-2 space-y-1">
                        <li>Mastered loops, functions, and DOM manipulation.</li>
                        <li>Built small projects like a Calculator and To-Do List.</li>
                        <li>Started solving basic problems on HackerRank.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="h-5 w-5 text-neutral-400" />
                        <h4 className="text-xl font-bold text-white">Secondary School (S.S.C)</h4>
                    </div>
                    <p className="text-neutral-300 text-sm md:text-base font-normal">
                        Completed my 10th Grade education.
                    </p>
                    <p className="text-neutral-400 text-sm mt-2">
                        This was the year I wrote my first line of HTML code. Seeing "Hello World" appear on a screen changed my perspective on what I wanted to do with my life.
                    </p>
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.02] relative">

            {/* 1. Header: Lamp Effect */}
            <LampContainer className="pt-36">
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-linear-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    My Journey
                </motion.h1>
            </LampContainer>

            {/* 2. Short Bio Section */}
            <div className="max-w-3xl mx-auto px-6 -mt-15 mb-15 relative z-10 text-center">
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                    Hi, I'm <span className="text-blue-400 font-bold">Moksh</span>. I am a passionate Full Stack Developer
                    based in India. My journey is defined by a blend of formal education and hands-on skill development.
                    I believe in learning by doing, creating applications that solve real problems, and constantly
                    leveling up my tech stack.
                </p>
            </div>

            {/* 3. The Timeline Section */}
            <div className="w-full">
                <Timeline data={data} />
            </div>

            {/* 4. Philosophy Section */}
            <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-3xl md:text-5xl font-bold text-center mb-16 text-white"
                >
                    My Development <span className="text-blue-500">Philosophy</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1: User Centric */}
                    <div className="p-8 rounded-2xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-900 hover:border-blue-500/50 transition-all duration-300 group">
                        <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">User-Centric Design</h3>
                        <p className="text-neutral-400 leading-relaxed text-sm">
                            I don't just write code; I build experiences. I believe that performance and accessibility are not optional features—they are the baseline of every modern web application.
                        </p>
                    </div>

                    {/* Card 2: Scalable Code */}
                    <div className="p-8 rounded-2xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-900 hover:border-emerald-500/50 transition-all duration-300 group">
                        <div className="h-12 w-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Code2 className="h-6 w-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Scalable Architecture</h3>
                        <p className="text-neutral-400 leading-relaxed text-sm">
                            Writing code that works is easy. Writing code that is maintainable, reusable, and scalable is the challenge I enjoy. I focus on clean patterns and modular folder structures.
                        </p>
                    </div>

                    {/* Card 3: Constant Learning */}
                    <div className="p-8 rounded-2xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-900 hover:border-purple-500/50 transition-all duration-300 group">
                        <div className="h-12 w-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Always Evolving</h3>
                        <p className="text-neutral-400 leading-relaxed text-sm">
                            The tech landscape changes daily. I dedicate time every week to learn new frameworks (like Astro or Hono) to ensure I'm using the best tool for the job.
                        </p>
                    </div>

                </div>

                {/* Final CTA */}
                <div className="mt-24 text-center">
                    <h3 className="text-2xl font-bold text-white mb-6">Ready to build something amazing?</h3>
                    <Link
                        href="/contact"
                        className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-size-[200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                        Let's Connect
                    </Link>
                </div>
            </div>

        </div>
    );
}