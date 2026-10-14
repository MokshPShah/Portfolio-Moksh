import type { MetadataRoute } from "next";
import { profile } from "@/lib/content";
import { siteDescription } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name}, ${profile.title}`,
    short_name: profile.name,
    description: siteDescription,
    start_url: "/",
    display: "browser",
    background_color: "#f7f7f5",
    theme_color: "#0c6b57",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
