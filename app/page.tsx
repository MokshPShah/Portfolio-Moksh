import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { jobs, profile, projects } from "@/lib/content";
import {
  ConfidentialNote,
  Container,
  ContactBand,
  JobEntry,
  ProjectCard,
  SectionTitle,
  TextLink,
  WorkGrid,
} from "@/components/blocks";
import { JewelryTag } from "@/components/JewelryTag";

// Title and description come from the root layout; this page only pins its canonical URL.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const workProjects = projects.filter((p) => p.context === "work");

const facts = [
  { value: "Jun 2026", label: `Joined ${profile.company}` },
  { value: `${workProjects.length} ERPs`, label: "Production and accounting" },
  { value: "550+", label: "Commits to the ERPs since June" },
  { value: "2027", label: "B.Sc. IT, Vidhyadeep University" },
];

export default function Home() {
  const current = jobs.find((j) => j.current) ?? jobs[0];
  const [first, second, third] = projects.filter((p) => p.context === "personal" && p.featured);

  return (
    <Container>
      {/* Intro */}
      <section className="grid grid-cols-1 gap-12 pt-12 pb-16 md:grid-cols-12 md:items-center md:gap-x-16 md:pt-20 md:pb-20">
        <div className="md:col-span-7">
          <p className="mb-5 flex items-center gap-2.5 text-[15px] font-medium text-accent">
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent ring-4 ring-accent/15" aria-hidden="true" />
            {profile.name}, {profile.title} at {profile.company}
          </p>
          <h1 className="text-[40px] leading-[1.06] font-medium tracking-[-0.035em] md:text-[60px]">
            I build the internal systems a jewelry business runs on.
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted md:text-[19px]">
            Two web ERPs, one for production and one for stock, vendor work and accounting, built in TypeScript.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-accent px-5 py-3 text-[15px] font-medium text-on-accent transition-transform active:scale-[0.98]"
            >
              Download resume
            </a>
            <Link
              href="/contact"
              className="rounded-md border border-line px-5 py-3 text-[15px] font-medium transition-colors hover:border-muted"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="md:col-span-5">
          <Image
            src="/profile.png"
            alt={profile.name}
            width={720}
            height={780}
            priority
            className="aspect-[4/4.3] w-full rounded-lg object-cover object-[center_20%]"
          />
          <JewelryTag
            rows={[
              { label: "Role", value: profile.title },
              { label: "At", value: profile.company },
              { label: "Based", value: "Surat, hybrid" },
            ]}
          />
        </div>
      </section>

      {/* Facts on one glass panel, figures set in tabular mono */}
      <div className="glass mt-6 grid grid-cols-2 rounded-lg px-5 md:mt-10 md:grid-cols-4 md:px-2">
        {facts.map((f, i) => (
          <div
            key={f.label}
            className={[
              "py-6",
              i % 2 === 1 ? "border-l border-line pl-4" : "pr-4",
              i < 2 ? "border-b border-line md:border-b-0" : "",
              i === 0 ? "md:pr-7" : "md:px-7",
              i === 2 ? "md:border-l md:border-line" : "",
            ].join(" ")}
          >
            <p className="font-mono text-2xl font-medium tracking-tight tabular-nums md:text-[28px]">{f.value}</p>
            <p className="mt-1 text-sm text-muted">{f.label}</p>
          </div>
        ))}
      </div>

      {/* Current role */}
      <section className="pt-24 md:pt-28">
        <SectionTitle aside={<TextLink href="/experience">Full experience</TextLink>}>Where I work</SectionTitle>
        <div className="border-b border-line">
          <JobEntry job={current} />
        </div>
      </section>

      {/* Work systems */}
      <section className="pt-24 md:pt-28">
        <SectionTitle>What I&apos;ve built at work</SectionTitle>
        <WorkGrid items={workProjects} />
        <ConfidentialNote />
      </section>

      {/* Personal projects */}
      <section className="pt-24 md:pt-28">
        <SectionTitle aside={<TextLink href="/projects">All projects</TextLink>}>Personal projects</SectionTitle>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-12">
          <div className="md:col-span-7">
            <ProjectCard project={first} imageClass="aspect-[16/9]" />
          </div>
          <div className="md:col-span-5">
            <ProjectCard project={second} imageClass="aspect-[16/10.6] object-left-top!" />
          </div>
          <div className="md:col-span-12">
            <ProjectCard project={third} layout="row" imageClass="aspect-[16/10]" />
          </div>
        </div>
      </section>

      <ContactBand />
    </Container>
  );
}
