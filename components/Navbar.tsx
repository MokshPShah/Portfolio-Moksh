"use client";
import React, { useState } from "react";
import Link from "next/link";
import { NoiseBackground } from "./ui/noise-background";
import { IconDownload, IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full border-b border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl shadow-white/10">
            <div className="container mx-auto flex h-16 items-center justify-between px-6">
                
                {/* 1. Logo */}
                <Link href="/" className="text-xl font-bold text-white tracking-wider">
                    PORTFOLIO
                </Link>

                {/* 2. Desktop Menu (Hidden on Mobile) */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLinks />
                </div>

                {/* 3. Desktop CTA Button (Hidden on Mobile) */}
                <div className="hidden md:block">
                    <DownloadButton />
                </div>

                {/* 4. Mobile Menu Toggle Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                    {isOpen ? <IconX /> : <IconMenu2 />}
                </button>
            </div>

            {/* 5. Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-white/10 bg-black/90 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="flex flex-col items-center gap-6 py-8">
                            {/* Mobile Links */}
                            <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-zinc-400 hover:text-white transition-colors">Home</Link>
                            <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-zinc-400 hover:text-white transition-colors">About</Link>
                            <Link href="/projects" onClick={() => setIsOpen(false)} className="text-lg font-medium text-zinc-400 hover:text-white transition-colors">Projects</Link>
                            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-zinc-400 hover:text-white transition-colors">Contact</Link>
                            
                            {/* Mobile CTA */}
                            <div onClick={() => setIsOpen(false)}>
                                <DownloadButton />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

// --- Helper Components to keep code clean ---

function NavLinks() {
    return (
        <>
            <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">About</Link>
            <Link href="/projects" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Projects</Link>
            <Link href="/contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Contact</Link>
        </>
    );
}

function DownloadButton() {
    return (
        <a href="/Moksh_CV.pdf" download="Moksh_CV.pdf" target="_blank" rel="noopener noreferrer">
            <NoiseBackground
                containerClassName="w-fit p-2 rounded-full"
                gradientColors={[
                    "rgb(255, 100, 150)",
                    "rgb(100, 150, 255)",
                    "rgb(255, 200, 100)",
                ]}
            >
                <div className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)] flex items-center gap-1">
                    Download CV <IconDownload stroke={2} size={18} />
                </div>
            </NoiseBackground>
        </a>
    );
}