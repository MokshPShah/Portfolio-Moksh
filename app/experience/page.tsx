import type { Metadata } from "next";
import { breadcrumbs, pageMetadata } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { jobs, profile, projects, recognition, training } from "@/lib/content";
import { ConfidentialNote, Container, ContactBand, JobEntry, PageHeader, SectionTitle, WorkGrid } from "@/components/blocks";

export const metadata: Metadata = pageMetadata({
  title: "Experience",
  description: `Work experience of ${profile.name}, ${profile.title} at ${profile.company} in Surat: production and accounting ERPs built with Next.js, tRPC and PostgreSQL.`,
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <Container>
      <JsonLd data={breadcrumbs([{ name: "Experience", path: "/experience" }])} />
      <PageHeader
        title="Experience"
        intro={
          <>
            <p>
              I&apos;m a {profile.title} at {profile.company} in Surat, building the ERPs the
              business runs on. I came to it through structured MERN training and a run of
              projects I built and deployed myself.
            </p>
            <p className="mt-6">
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-accent underline decoration-1 underline-offset-4 hover:decoration-2"
              >
                Download the full resume (PDF)
              </a>
            </p>
          </>
        }
      />

      <section>
        <SectionTitle>Work</SectionTitle>
        <div className="border-b border-line">
          {jobs.map((job) => (
            <JobEntry key={job.company} job={job} />
          ))}
        </div>
      </section>

      <section className="pt-24 md:pt-28">
        <SectionTitle>Systems I work on</SectionTitle>
        <WorkGrid items={projects.filter((p) => p.context === "work")} />
        <ConfidentialNote />
      </section>

      <section className="pt-24 md:pt-28">
        <SectionTitle>Training</SectionTitle>
        <article className="grid grid-cols-1 gap-x-12 gap-y-3 border-y border-line py-9 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-sm text-muted">{training.period}</p>
            <p className="mt-1 text-xl font-medium">{training.name}</p>
          </div>
          <div className="md:col-span-8">
            <h3 className="text-xl font-medium">{training.course}</h3>
            <p className="mt-2 max-w-[60ch] leading-relaxed text-body">{training.body}</p>
          </div>
        </article>
      </section>

      <section className="pt-24 md:pt-28">
        <SectionTitle>Recognition</SectionTitle>
        <ul className="grid grid-cols-1 gap-x-12 md:grid-cols-3">
          {recognition.map((r) => (
            <li key={r.title} className="border-t border-line py-6">
              <p className="font-medium">{r.title}</p>
              <p className="mt-1 text-[15px] leading-relaxed text-muted">{r.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <ContactBand />
    </Container>
  );
}
