import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { profile, projects } from "@/lib/content";
import { Chips, Container, Results } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, breadcrumbs, pageMetadata, personId } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const where = project.context === "work" ? `built at ${profile.company}` : "a personal project";
  const path = `/projects/${project.slug}`;
  const base = pageMetadata({
    title: project.title,
    description: `${project.summary} ${project.title} is ${where} by ${profile.name}, using ${project.stack.slice(0, 4).join(", ")}.`,
    path,
  });
  // Point the share card at this project's own image instead of the site-wide one.
  return {
    ...base,
    keywords: [project.title, ...project.stack, profile.name],
    openGraph: {
      ...base.openGraph,
      images: [{ url: `${path}/opengraph-image`, width: 1200, height: 630, alt: `${project.title}, a project by ${profile.name}` }],
    },
    twitter: { ...base.twitter, images: [`${path}/twitter-image`] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const group = projects.filter((p) => p.context === project.context);
  const next = group[(group.indexOf(project) + 1) % group.length];

  return (
    <Container>
      <JsonLd
        data={[
          {
            "@type": "CreativeWork",
            "@id": `${absoluteUrl(`/projects/${project.slug}`)}#work`,
            name: project.title,
            description: project.summary,
            url: absoluteUrl(`/projects/${project.slug}`),
            genre: project.kind,
            keywords: project.stack.join(", "),
            creator: { "@id": personId },
            ...(project.image && { image: absoluteUrl(project.image) }),
            ...((project.live || project.source) && { sameAs: [project.live, project.source].filter(Boolean) }),
            ...(project.context === "work" && { sourceOrganization: { "@type": "Organization", name: profile.company } }),
          },
          breadcrumbs([
            { name: "Projects", path: "/projects" },
            { name: project.title, path: `/projects/${project.slug}` },
          ]),
        ]}
      />
      <p className="pt-10 md:pt-14">
        <Link href="/projects" className="text-[15px] text-muted hover:text-ink">
          <span aria-hidden="true">&larr;</span> All projects
        </Link>
      </p>

      <header className="grid grid-cols-1 gap-x-12 gap-y-8 pt-8 pb-12 md:grid-cols-12 md:pt-10 md:pb-14">
        <div className="md:col-span-7">
          <p className="text-[15px] text-muted">{project.kind}</p>
          <h1 className="mt-2 text-4xl font-medium tracking-tight md:text-[56px] md:leading-[1.05]">
            {project.title}
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-body">{project.summary}</p>
        </div>

        <dl className="space-y-5 text-[15px] md:col-span-4 md:col-start-9 md:pt-8">
          <div>
            <dt className="mb-2 text-muted">Built with</dt>
            <dd>
              <Chips items={project.stack} />
            </dd>
          </div>
          {project.context === "work" ? (
            <div>
              <dt className="mb-1 text-muted">Built at</dt>
              <dd>
                {profile.company}
                {project.period ? `, ${project.period}` : ""}
              </dd>
              <dd className="mt-2 text-sm text-muted">
                Confidential system: overview only, no client names, screenshots or code.
              </dd>
            </div>
          ) : (
            <div>
              <dt className="mb-1 text-muted">Links</dt>
              <dd className="flex flex-wrap gap-x-5">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-accent underline decoration-1 underline-offset-4 hover:decoration-2">
                    Live site
                  </a>
                )}
                {project.source ? (
                  <a href={project.source} target="_blank" rel="noopener noreferrer" className="text-accent underline decoration-1 underline-offset-4 hover:decoration-2">
                    Source code
                  </a>
                ) : (
                  <span className="text-muted">Code is in a private repository</span>
                )}
              </dd>
            </div>
          )}
        </dl>
      </header>

      {project.image && (
      <Image
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        width={2000}
        height={1250}
        priority
        className="aspect-[16/9] w-full rounded-lg border border-line object-cover object-top"
      />
      )}

      {(project.highlights || project.results) && (
        <section className={`grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-12 ${project.image ? "pt-16 md:pt-20" : "border-t border-line pt-12 md:pt-14"}`}>
          <h2 className="text-[28px] font-medium tracking-tight md:col-span-4 md:text-4xl">{project.context === "work" ? "What I worked on" : "What I built"}</h2>
          <div className="space-y-10 md:col-span-8">
            {project.highlights && (
              <ul className="list-disc space-y-3 pl-5 text-lg leading-relaxed text-body marker:text-muted">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
            <Results results={project.results} />
          </div>
        </section>
      )}

      <nav className="mt-24 border-t border-line pt-8" aria-label="Next project">
        <p className="text-sm text-muted">Next project</p>
        <Link href={`/projects/${next.slug}`} className="mt-1 inline-block text-2xl font-medium tracking-tight hover:underline hover:underline-offset-4 md:text-3xl">
          {next.title} <span aria-hidden="true">&rarr;</span>
        </Link>
      </nav>
    </Container>
  );
}
