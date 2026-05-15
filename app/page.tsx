import Link from "next/link";
import Image from "next/image";
import { Terminal, Code2 } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen selection:bg-[#3B82F6] selection:text-white">

      {/* 1. MINIMALIST HIGH-CONTRAST HERO (BLUE THEME) */}
      <main className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-10 pb-16 overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">
          <TextHoverEffect text="Moksh" />
        </div>

        {/* Subtle Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F2937_1px,transparent_1px),linear-gradient(to_bottom,#1F2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">

          {/* Availability Status Badge */}
          <div className="flex items-center gap-3 px-4 py-1.5 mb-10 rounded-full border border-white/10 bg-[#111827] text-neutral-400 text-sm font-medium shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3B82F6]"></span>
            </span>
            Available for new opportunities
          </div>

          {/* Avatar Area */}
          <div className="relative mb-10">
            <div className="absolute -inset-2 rounded-full bg-[#3B82F6] blur-xl opacity-20"></div>
            <div className="relative w-32 h-32 md:w-50 md:h-50 rounded-full overflow-hidden border-2 border-white/10 bg-[#111827] shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <Image
                src="/profile.png"
                alt="Moksh Shah"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Primary Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            <span className="text-neutral-600 font-mono font-light mr-4 sm:mr-6">{">"}</span>
            Hello, I'm <span className="text-[#3B82F6]">Moksh</span>.
          </h1>

          {/* Animated Subtitle */}
          <div className="max-w-2xl text-lg md:text-xl text-neutral-400 mb-12 leading-relaxed font-mono">
            <TextGenerateEffect
              words="A Full Stack Web Developer. I build clean, high-performance backend architectures and stark, functional interfaces."
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/projects"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold transition-all cursor-pointer w-full sm:w-auto shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              <Code2 size={18} />
              View Projects
            </Link>

            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#111827] hover:bg-[#1F2937] text-white font-semibold transition-all cursor-pointer w-full sm:w-auto border border-white/10 shadow-sm"
            >
              <Terminal size={18} />
              Contact Me
            </Link>
          </div>
        </div>
      </main>

      {/* 2. PAGE SECTIONS */}
      <div className="relative z-10 bg-[#0A0A0A]">
        <Skills />
        <Projects />
        <Education />

        {/* 3. FINAL CTA */}
        <div className="mt-32 mb-24 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to build something?
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-lg">
            Whether you need a robust backend structure or a clean frontend execution, my inbox is open.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold transition-all cursor-pointer border border-[rgba(240,246,252,0.1)] shadow-[0_0_20px_rgba(59,130,246,0.2)] text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}