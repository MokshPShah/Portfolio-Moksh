import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
import { LinkPreview } from "./ui/link-preview";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/10 bg-black pt-16 pb-8 text-neutral-400 relative z-50 mt-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Column 1: Brand & Bio */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold text-white tracking-wider">
                            MOKSH
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Building digital experiences that matter. Focused on clean code,
                            performance, and modern user interfaces.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold tracking-wide">Explore</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="hover:text-white transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Socials & Contact */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold tracking-wide">Connect</h3>
                        <div className="flex gap-4">
                            {/* Github */}
                            <LinkPreview url="https://github.com/MokshPShah">
                                <div
                                    className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white transition-all"
                                >
                                    <Github className="h-4 w-4" />
                                </div>
                            </LinkPreview>

                            {/* Whatsapp */}
                            <LinkPreview
                                url="https://wa.me/9427390651?text=Hi%20I%20want%20to%20more%20about%20this!"
                                isStatic
                                imageSrc="/whatsapp-screenshot.png"
                                className="font-bold text-green-500"
                            >
                                <div className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                                    <IconBrandWhatsapp className="w-5 h-5 text-white" />
                                </div>
                            </LinkPreview>

                            {/* linkedin */}
                            <LinkPreview
                                url="https://linkedin.com/in/me-moksh"
                                isStatic
                                imageSrc="/linkedin-screenshot.png"
                                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-pink-500">
                                <div
                                    className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white transition-all"
                                >
                                    <Linkedin className="h-4 w-4" />
                                </div>
                            </LinkPreview>
                            
                            {/* Mail */}
                            <LinkPreview
                                url="mailto:moksh.shah.mps@gmail.com"
                                isStatic
                                imageSrc="/gmail-screenshot.png"
                                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-pink-500"
                            >
                                {/* Note: We use a div here instead of Link to avoid the <a> inside <a> error */}
                                <div className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                                    <IconMail className="w-5 h-5 text-white" />
                                </div>
                            </LinkPreview>
                        </div>
                        <p className="text-xs pt-2">
                            Email: <span className="text-white">moksh.shah.mps@gmail.com</span>
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex justify-center items-center gap-4 text-xs">
                    <p>© {currentYear} Moksh. All rights reserved.</p>

                </div>
            </div>
        </footer>
    );
}