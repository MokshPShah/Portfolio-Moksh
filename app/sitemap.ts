import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/experience"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/projects"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl("/contact"), lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];
  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: absoluteUrl(`/projects/${p.slug}`),
    lastModified,
    changeFrequency: "yearly",
    priority: p.context === "work" || p.featured ? 0.7 : 0.5,
    ...(p.image && { images: [absoluteUrl(p.image)] }),
  }));
  return [...pages, ...projectPages];
}
