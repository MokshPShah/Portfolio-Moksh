import { Spotlight } from "@/components/ui/spotlight-new";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full rounded-md flex items-center justify-center bg-black/96 antialiased bg-grid-white/[0.02] relative overflow-hidden">

        {/* 1. The Spotlight Effect */}
        <Spotlight />

        {/* 2. THE BACKGROUND NAME (Behind everything) */}
        <div className="absolute inset-0 pointer-events-none">
          <TextHoverEffect text="Moksh" />
        </div>

        {/* 3. The Main Content (Grid Layout) */}
        <div className="relative container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT COLUMN: Text Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-20 lg:pt-0">
              <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Create, Deploy, <br /> and Scale.
              </h1>

              <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg">
                I am a full-stack developer building modern web applications.
                I focus on intuitive design, clean code, and user experience.
              </p>

              <div className="mt-8 flex gap-4">
                <Link href="/projects">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="rounded-full bg-white text-black hover:bg-neutral-200 cursor-pointer flex items-center space-x-2"
                  >
                    <span>See my work</span>
                  </HoverBorderGradient>
                </Link>

                <Link href="/contact">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="rounded-full border-white/20 text-white hover:bg-white/10 cursor-pointer flex items-center space-x-2"
                  >
                    <span>Contact Me</span>
                    <ArrowRight className="h-4 w-4" />
                  </HoverBorderGradient>
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Your Image */}
            <div className="flex justify-center lg:justify-end relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-blue-500/20 blur-[100px] rounded-full"></div>

              <div className="relative w-75 h-75 md:w-100 md:h-100 rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/profile.png"
                  alt="My Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="relative z-10">
        <Skills />
      </div>

      <div className="relative z-10">
        <Projects />
      </div>

      <div className="relative z-10">
        <Education />
      </div>

      <div className="relative z-10 space-y-7">
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

    </>
  );
}