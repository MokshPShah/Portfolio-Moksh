import ContactContent from "@/components/ContactContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Me",
};

export default function Contact() {
    return <ContactContent />
}