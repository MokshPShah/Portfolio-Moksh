import type { Metadata } from "next";
import { absoluteUrl, breadcrumbs, pageMetadata, personId } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { education, profile, skills } from "@/lib/content";
import { Container, ContactBand, PageHeader, SectionTitle } from "@/components/blocks";
import { Pipeline } from "@/components/Pipeline";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: `About ${profile.name}, a ${profile.title} from Surat, India: how I started, how I work, my skills in React, Next.js, Node.js and TypeScript, and education.`,
  path: "/about",
});

const stages = [
  { when: "2022", title: "First HTML page", body: "Wrote it in 10th grade. Seeing it open in a browser is what started this.", state: "done" as const },
  { when: "2023", title: "JavaScript", body: "Evenings on loops, functions and the DOM, plus a lot of HackerRank.", state: "done" as const },
  { when: "2024", title: "MERN training and a B.Sc.", body: "Full stack course at Red & White alongside a B.Sc. IT at Vidhyadeep University.", state: "done" as const },
  { when: "Jun 2026", title: "Full Stack Developer", body: "Joined Cultrd Growers LLP to build its production and accounting ERPs.", state: "current" as const },
  { when: "2027", title: "B.Sc. IT complete", body: "Finishing the degree alongside full-time work.", state: "next" as const },
];

const principles = [
  {
    title: "Fast and usable first",
    body: "A page should load quickly and work with a keyboard and a screen reader before it gets any polish.",
  },
  {
    title: "Code the next person can read",
    body: "Small components, clear names, typed data and a folder structure that tells you where things go.",
  },
  {
    title: "Keep learning on purpose",
    body: "I set aside time each week for something new. Lately that has been Astro and Hono.",
  },
];

export default function AboutPage() {
  return (
    <Container>
      <JsonLd
        data={[
          {
            "@type": "ProfilePage",
            url: absoluteUrl("/about"),
            name: `About ${profile.name}`,
            mainEntity: { "@id": personId },
          },
          breadcrumbs([{ name: "About", path: "/about" }]),
        ]}
      />
      <PageHeader
        title="About"
        intro={
          <>
            <p className="text-ink">
              I&apos;m {profile.name}, a {profile.title} at {profile.company}, based in Surat, India.
            </p>
            <p className="mt-5">
              I wrote my first HTML page in 2022, learned JavaScript in the evenings, then went
              through full stack training while starting a B.Sc. in IT. Today I work full-time and
              finish my degree alongside it.
            </p>
          </>
        }
      />

      <section className="border-t border-line pt-14">
        <SectionTitle>How I got here</SectionTitle>
        <Pipeline stages={stages} />
      </section>

      <section className="pt-24 md:pt-28">
        <SectionTitle>How I work</SectionTitle>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:gap-12">
          {principles.map((p) => (
            <div key={p.title}>
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-24 md:pt-28">
        <SectionTitle>Skills</SectionTitle>
        <dl className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group} className="border-t border-line py-6">
              <dt className="text-sm text-muted">{s.group}</dt>
              <dd className="mt-1 text-lg leading-relaxed">{s.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="pt-24 md:pt-28">
        <SectionTitle>Education</SectionTitle>
        <ol className="border-b border-line">
          {education.map((e) => (
            <li key={e.title} className="grid grid-cols-1 gap-x-12 gap-y-1 border-t border-line py-7 md:grid-cols-12">
              <p className="font-mono text-sm text-muted md:col-span-4 md:pt-1">{e.period}</p>
              <div className="md:col-span-8">
                <h3 className="text-lg font-medium">{e.title}</h3>
                <p className="text-muted">
                  {e.place}
                  {e.note ? `. ${e.note}` : ""}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <ContactBand />
    </Container>
  );
}
