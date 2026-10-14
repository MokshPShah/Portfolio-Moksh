"use client";
import { useSyncExternalStore } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";

type Theme = "light" | "dark";

// The inline script in the root layout sets data-theme before the first paint, so
// the page never flashes the wrong colors. This switch just reads and flips it.
const read = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

const listeners = new Set<() => void>();
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore<Theme | null>(subscribe, read, () => null);
  const isDark = theme === "dark";

  const toggle = () => {
    const next: Theme = read() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private mode or blocked storage: the choice just lasts for this visit.
    }
    listeners.forEach((cb) => cb());
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className={`relative inline-flex h-8 w-[60px] shrink-0 items-center rounded-full border border-line bg-surface/40 p-[3px] transition-colors hover:border-muted ${className}`}
    >
      {/* Faint icons on the track show what the other side does. */}
      <IconSun aria-hidden="true" size={14} stroke={1.75} className="absolute left-[9px] text-muted" />
      <IconMoon aria-hidden="true" size={14} stroke={1.75} className="absolute right-[9px] text-muted" />
      {/* Knob position and icon come from data-theme in CSS, so the server render
          already matches and nothing has to fade in after hydration. */}
      <span
        aria-hidden="true"
        className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-on-accent transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] dark:translate-x-7"
      >
        <IconSun size={14} stroke={2} className="dark:hidden" />
        <IconMoon size={14} stroke={2} className="hidden dark:block" />
      </span>
    </button>
  );
}
