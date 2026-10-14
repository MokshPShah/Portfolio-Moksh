import Link from "next/link";
import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mx-auto mt-28 max-w-[1200px] px-4 md:px-10">
      <div className="flex flex-col gap-4 border-t border-line py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li><Link className="hover:text-ink" href="/experience">Experience</Link></li>
          <li><Link className="hover:text-ink" href="/projects">Projects</Link></li>
          <li><a className="hover:text-ink" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className="hover:text-ink" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
}
