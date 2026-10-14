import type { Metadata } from "next";
import { breadcrumbs, pageMetadata } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import Image from "next/image";
import { profile, projects } from "@/lib/content";
import {
  ConfidentialNote,
  Container,
  ContactBand,
  PageHeader,
  ProjectCard,
  SectionTitle,
  WorkCard,
  WorkGrid,
} from "@/components/blocks";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description:
    "Projects by Moksh Shah: ERPs built at Cultrd Growers LLP, plus personal case studies in Next.js, React, Electron and Node.js, including Strenoxa and a diamond inventory app.",
  path: "/projects",
});

export default function ProjectsPage() {
  const work = projects.filter((p) => p.context === "work");
  const personal = projects.filter((p) => p.context === "personal");
  const caseStudies = personal.filter((p) => p.featured);
  const sideProjects = personal.filter((p) => !p.featured && !p.image);
  const smallerBuilds = personal.filter((p) => !p.featured && p.image);

  return (
    <Container>
      <JsonLd data={breadcrumbs([{ name: "Projects", path: "/projects" }])} />
      <PageHeader
        title="Projects"
        intro={
          <p>
            The systems I work on at {profile.company}, then the things I build on my own: three
            case studies, current side projects, and the smaller apps I learned on.
          </p>
        }
      />

      <section>
        <SectionTitle>At {profile.company}</SectionTitle>
        <WorkGrid items={work} />
        <ConfidentialNote />
      </section>

      <section className="pt-24 md:pt-28">
        <SectionTitle>Personal case studies</SectionTitle>
        <div className="grid grid-cols-1 gap-7">
          {caseStudies.map((p) => (
            <ProjectCard
              key={p.slug}
              project={p}
              layout="row"
              imageClass={`aspect-[16/10] ${p.slug === "inventory" ? "object-left-top!" : ""}`}
            />
          ))}
        </div>
      </section>

      <section className="pt-24 md:pt-28">
        <SectionTitle>Side projects</SectionTitle>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {sideProjects.map((p, i) => (
            <div key={p.slug} className={i % 4 === 0 || i % 4 === 3 ? "md:col-span-7" : "md:col-span-5"}>
              <WorkCard project={p} />
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">The code for these is in private repositories.</p>
      </section>

      <section className="pt-24 md:pt-28">
        <SectionTitle>Smaller builds</SectionTitle>
        <ul className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2">
          {smallerBuilds.map((p) => (
            <li key={p.slug} className="group relative">
              {p.image && (
                <Image
                  src={p.image}
                  alt={`Screenshot of ${p.title}`}
                  width={1200}
                  height={750}
                  className="aspect-[16/10] w-full rounded-lg border border-line object-cover object-top"
                />
              )}
              <p className="mt-5 text-[13px] text-muted">{p.kind}</p>
              <h3 className="mt-1 text-lg font-medium">
                <Link
                  href={`/projects/${p.slug}`}
                  className="after:absolute after:inset-0 group-hover:underline group-hover:underline-offset-4"
                >
                  {p.title}
                </Link>
              </h3>
              <p className="mt-2 max-w-[56ch] leading-relaxed text-body">{p.summary}</p>
              <p className="mt-3 font-mono text-[13px] text-muted">{p.stack.join(", ")}</p>
            </li>
          ))}
        </ul>
      </section>

      <ContactBand />
    </Container>
  );
}
