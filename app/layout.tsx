import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Briefcase } from "lucide-react";
import { Footer } from "@/components/Footer";

// Load the font
const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Moksh | Full Stack Developer",
    template: "%s | Moksh Portfolio",
  },
  description: "Created with Next.js and Aceternity UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          // We force a black background because Aceternity components 
          // are designed for dark mode.
          "min-h-screen bg-black font-sans antialiased text-white selection:bg-white/20",
          fontSans.variable
        )}
      >
        <FloatingNav navItems={navItems} />

        <Navbar />
        <main className="relative flex min-h-screen flex-col overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}