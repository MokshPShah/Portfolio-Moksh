"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/content";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-30 pt-3">
      <div className="mx-auto max-w-[1200px] px-4 md:px-10">
      <div className="glass rounded-lg px-4 md:px-6">
      <nav aria-label="Main" className="flex h-16 items-center justify-between">
        <Link href="/" className="text-[17px] font-semibold tracking-tight">
          {profile.name}
        </Link>

        <ul className="hidden items-center gap-8 text-[15px] md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className="text-muted transition-colors hover:text-ink aria-[current=page]:text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-accent px-4 py-2 text-on-accent transition-transform active:scale-[0.98]"
            >
              Resume
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        <div className="flex items-center gap-4 md:hidden">
        <ThemeToggle />
        <button
          type="button"
          className="text-[15px]"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
        </div>
      </nav>

      {isOpen && (
        <ul id="mobile-menu" className="flex flex-col gap-1 border-t border-line py-4 text-lg md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive(l.href) ? "page" : undefined}
                className="block py-2 text-muted aria-[current=page]:text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="block py-2 text-accent">
              Resume (PDF)
            </a>
          </li>
        </ul>
      )}
      </div>
      </div>
    </header>
  );
}
