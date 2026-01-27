import AboutContent from "@/components/AboutContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me",
};

export default function AboutPage() {
    return <AboutContent />
}