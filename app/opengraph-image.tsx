import { ogCard, ogSize } from "@/lib/og";
import { profile } from "@/lib/content";

export const alt = `${profile.name}, ${profile.title} at ${profile.company}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    eyebrow: `${profile.title} at ${profile.company}`,
    title: "I build the internal systems a jewelry business runs on.",
    line: "Production and accounting ERPs in Next.js, TypeScript, tRPC and PostgreSQL. Based in Surat, India.",
  });
}
