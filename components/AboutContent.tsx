"use client";
import React from "react";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { GraduationCap, Code2, Layers, Cpu, Rocket } from "lucide-react";
import Link from "next/link";
import { IconBulbFilled, IconCheck } from "@tabler/icons-react";

export default function AboutContent() {

    // --- TIMELINE DATA ---
    const data = [
        {
            title: "Current Focus",
            content: (
                <div className="space-y-6">
                    <p className="text-neutral-400 text-sm md:text-base font-normal leading-relaxed mb-6">
                        I am currently pursuing my formal degree while actively building real-world projects, taking on freelance work, and refining my system architecture skills.
                    </p>

                    {/* Card 1: University */}
                    <div className="bg-[#111827] border border-white/5 p-6 rounded-2xl flex gap-4 items-start hover:border-[#3B82F6]/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300">
                        <div className="h-12 w-12 rounded-full bg-[#3B82F6]/10 flex items-center justify-center shrink-0 border border-[#3B82F6]/20">
                            <GraduationCap className="h-6 w-6 text-[#3B82F6]" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white mb-1">Vidhyadeep University</h4>
                            <p className="text-[#3B82F6] text-sm font-medium mb-3">B.Sc. IT (Bachelor of Science in Information Technology)</p>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Pursuing my graduation (2024 - 2027). Building a strong theoretical foundation in Computer Science, Database Management, and Software Engineering.
                            </p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2026",
            content: (
                <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                        <h4 className="text-2xl font-bold text-white">Full-Stack Certification</h4>
                    </div>
                    <p className="text-neutral-400 text-sm md:text-base font-normal leading-relaxed mb-6">
                        Officially graduated and completed my specialized training in modern full-stack web development.
                    </p>

                    {/* Card: Skill Course (COMPLETED) */}
                    <div className="bg-[#111827] border border-emerald-500/20 p-6 rounded-2xl flex gap-4 items-start hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300 relative overflow-hidden">
                        {/* Subtle success background glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 blur-[80px] opacity-10 pointer-events-none rounded-full" />

                        <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/30">
                            <IconCheck className="h-6 w-6 text-emerald-400" />
                        </div>
                        <div className="relative z-10">
                            <h4 className="text-xl font-bold text-white mb-1">Red & White Skill Education</h4>
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded uppercase tracking-wider border border-emerald-500/20">Completed</span>
                                <p className="text-emerald-400 text-sm font-medium">MERN Stack Development Course</p>
                            </div>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Successfully graduated from this specialized skill development program. Mastered MongoDB, Express, React, and Node.js by building industry-standard practical projects.
                            </p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2025",
            content: (
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-3 w-3 rounded-full bg-purple-500 animate-pulse" />
                        <h4 className="text-2xl font-bold text-white">Mastering Modern Web</h4>
                    </div>
                    <p className="text-neutral-400 text-sm md:text-base font-normal leading-relaxed mb-6">
                        After solidifying the basics of JavaScript, I transitioned to modern frameworks to build robust architectures. I focused on <strong>React.js</strong> and <strong>Next.js</strong> to create fast, SEO-friendly, and interactive applications.
                    </p>
                    <div className="bg-[#111827] p-6 rounded-2xl border border-white/5">
                        <h5 className="text-white text-sm font-bold mb-4 flex items-center gap-2">
                            <IconBulbFilled className="text-yellow-400" size={18} />
                            Key Milestones
                        </h5>
                        <ul className="list-disc list-inside text-neutral-400 text-sm space-y-2">
                            <li>Built dynamic, state-driven interfaces using <strong>React</strong> & Redux.</li>
                            <li>Implemented server-side rendering (SSR) via <strong>Next.js</strong>.</li>
                            <li>Mastered component-driven design and Tailwind CSS utility styling.</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <GraduationCap className="h-6 w-6 text-neutral-400" />
                        <h4 className="text-2xl font-bold text-white">Higher Secondary (H.S.C)</h4>
                    </div>
                    <p className="text-neutral-400 text-sm md:text-base font-normal leading-relaxed mb-4">
                        Completed my 12th Grade education with distinction.
                    </p>
                    <p className="text-neutral-500 text-sm leading-relaxed p-4 bg-white/5 rounded-xl border border-white/5">
                        This was the pivotal year I decided to dive fully into technology. I started learning <strong>C Language</strong> and <strong>Basic Python</strong> to grasp core programming logic and algorithmic thinking before entering university.
                    </p>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                        <h4 className="text-2xl font-bold text-white">The Logic Phase</h4>
                    </div>
                    <p className="text-neutral-400 text-sm md:text-base font-normal leading-relaxed mb-4">
                        While balancing school, I spent my nights deciphering the web. I focused entirely on <strong>JavaScript</strong> mechanics.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-400 text-sm mt-4">
                        <li className="flex items-center gap-2 bg-[#111827] px-3 py-2 rounded-lg border border-white/5"><span className="text-[#3B82F6]">✔</span> Mastered DOM manipulation</li>
                        <li className="flex items-center gap-2 bg-[#111827] px-3 py-2 rounded-lg border border-white/5"><span className="text-[#3B82F6]">✔</span> Built functional web tools</li>
                        <li className="flex items-center gap-2 bg-[#111827] px-3 py-2 rounded-lg border border-white/5"><span className="text-[#3B82F6]">✔</span> Solved logic algorithms</li>
                        <li className="flex items-center gap-2 bg-[#111827] px-3 py-2 rounded-lg border border-white/5"><span className="text-[#3B82F6]">✔</span> Understood Async/Await</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <GraduationCap className="h-6 w-6 text-neutral-400" />
                        <h4 className="text-2xl font-bold text-white">Secondary School (S.S.C)</h4>
                    </div>
                    <p className="text-neutral-400 text-sm md:text-base font-normal leading-relaxed mb-4">
                        Completed my 10th Grade education.
                    </p>
                    <p className="text-neutral-500 text-sm leading-relaxed italic border-l-2 border-[#3B82F6] pl-4">
                        "This was the year I wrote my first line of HTML code. Seeing text render on a screen through raw markup completely changed my perspective on what I wanted to do with my career."
                    </p>
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-[#0A0A0A] antialiased bg-grid-white/[0.02] relative">

            {/* 1. Header: Lamp Effect */}
            <LampContainer className="pt-36 h-[40vh] md:h-[50vh]">
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                    className="mt-8 bg-gradient-to-br from-white via-blue-100 to-[#3B82F6] py-4 bg-clip-text text-center text-5xl font-extrabold tracking-tight text-transparent md:text-8xl"
                >
                    My Journey.
                </motion.h1>
            </LampContainer>

            {/* 2. Short Bio Section */}
            <div className="max-w-4xl mx-auto px-6 -mt-20 mb-24 relative z-10 text-center">
                <div className="p-8 md:p-12 rounded-[2rem] bg-[#111827]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
                    <p className="text-lg md:text-2xl text-neutral-300 leading-relaxed font-light">
                        Hi, I'm <span className="text-[#3B82F6] font-bold">Moksh Shah</span>. I am a passionate Full Stack Web Developer based in India. My journey is defined by a blend of formal education and relentless hands-on skill development. I believe in learning by doing, architecting applications that solve real problems, and constantly leveling up my tech stack.
                    </p>
                </div>
            </div>

            {/* 3. The Timeline Section */}
            <div className="w-full">
                <Timeline data={data} />
            </div>

            {/* 4. Philosophy Section */}
            <div className="max-w-7xl mx-auto px-6 py-32 relative z-10 border-t border-white/5">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                        Development <span className="text-[#3B82F6]">Philosophy</span>.
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        The core principles that guide my code architecture and design decisions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: User Centric */}
                    <div className="group relative flex flex-col justify-between p-8 rounded-3xl bg-[#111827] border border-white/5 hover:-translate-y-2 hover:border-[#3B82F6]/50 hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.3)] transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6] blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
                        <div className="relative z-10">
                            <div className="h-14 w-14 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Layers className="h-7 w-7 text-[#3B82F6]" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">User-Centric Design</h3>
                            <p className="text-neutral-400 leading-relaxed text-base">
                                I don't just write code; I build experiences. I believe that performance, intuitive UI, and accessibility are not optional features—they are the baseline of every modern web application.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Scalable Code */}
                    <div className="group relative flex flex-col justify-between p-8 rounded-3xl bg-[#111827] border border-white/5 hover:-translate-y-2 hover:border-emerald-500/50 hover:shadow-[0_10px_40px_-15px_rgba(16,185,129,0.2)] transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
                        <div className="relative z-10">
                            <div className="h-14 w-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Cpu className="h-7 w-7 text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Scalable Architecture</h3>
                            <p className="text-neutral-400 leading-relaxed text-base">
                                Writing code that works is easy. Writing code that is maintainable, reusable, and scalable is the challenge I enjoy. I focus on clean patterns, RESTful APIs, and modular folder structures.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Constant Learning */}
                    <div className="group relative flex flex-col justify-between p-8 rounded-3xl bg-[#111827] border border-white/5 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_10px_40px_-15px_rgba(168,85,247,0.2)] transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
                        <div className="relative z-10">
                            <div className="h-14 w-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Rocket className="h-7 w-7 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Always Evolving</h3>
                            <p className="text-neutral-400 leading-relaxed text-base">
                                The tech landscape changes daily. I dedicate time to practicing Data Structures & Algorithms (DSA) and exploring new frameworks to ensure I'm always using the most efficient tool for the job.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="mt-32 text-center">
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Ready to build something amazing?</h3>
                    <Link
                        href="/contact"
                        className="inline-flex h-14 items-center justify-center rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] px-10 font-bold text-white transition-colors shadow-[0_0_20px_rgba(59,130,246,0.2)] cursor-pointer text-lg"
                    >
                        Let's Connect
                    </Link>
                </div>
            </div>

        </div>
    );
}