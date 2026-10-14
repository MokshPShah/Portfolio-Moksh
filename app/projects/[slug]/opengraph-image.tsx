import { ogCard, ogSize } from "@/lib/og";
import { profile, projects } from "@/lib/content";

export const alt = `A project by ${profile.name}`;
export const size = ogSize;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return ogCard({
    eyebrow: project?.kind ?? "Project",
    title: project?.title ?? profile.name,
    line: project ? project.stack.slice(0, 5).join("  ·  ") : profile.title,
  });
}
