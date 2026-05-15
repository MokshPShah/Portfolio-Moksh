"use client";
import React, { useState } from "react";
import Link from "next/link";
import { NoiseBackground } from "./ui/noise-background";
import { IconDownload, IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import portfolio from "../public/portfolio.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full border-b border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl shadow-white/10">
            <div className="container mx-auto flex h-16 items-center justify-between px-6">

                {/* 1. Logo (Fixed Image Scaling) */}
                <Link href="/" className="flex items-center">
                    <Image
                        src={portfolio}
                        alt="Portfolio Logo"
                        className="h-13 md:h-15 w-auto object-contain hover:opacity-80 transition-opacity"
                        priority
                    />
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
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
                </button>
            </div>

            {/* 5. Mobile Menu (Dropdown) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col items-center gap-6 py-8 px-6">
                            <NavLinks onClick={() => setIsOpen(false)} />
                            <div className="w-full h-px bg-white/10 my-2" />
                            <DownloadButton />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

// Reusable Navigation Links
function NavLinks({ onClick }: { onClick?: () => void }) {
    return (
        <>
            <Link href="/about" onClick={onClick} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">About</Link>
            <Link href="/projects" onClick={onClick} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Projects</Link>
            <Link href="/contact" onClick={onClick} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Contact</Link>
        </>
    );
}

// Reusable Download Button
function DownloadButton() {
    return (
        <a href="/MOKSH_SHAH_RESUME.pdf" download="MOKSH_SHAH_RESUME.pdf" target="_blank" rel="noopener noreferrer">
            <NoiseBackground
                containerClassName="w-fit p-1.5 rounded-full"
                gradientColors={[
                    "rgb(255, 100, 150)",
                    "rgb(100, 150, 255)",
                    "rgb(255, 200, 100)",
                ]}
            >
                <div className="flex items-center gap-2 cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-5 py-2 text-sm font-semibold text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-95 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]">
                    <IconDownload size={16} /> Resume
                </div>
            </NoiseBackground>
        </a>
    );
}