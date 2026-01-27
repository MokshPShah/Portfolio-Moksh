import ProjectContent from "@/components/ProjectContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects"
};

export default function Project() {
    return <ProjectContent/>
}