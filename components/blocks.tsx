import Link from "next/link";
import Image from "next/image";
import type { Job, Project } from "@/lib/content";
import { profile } from "@/lib/content";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1200px] px-4 md:px-10 ${className}`}>{children}</div>;
}

export function PageHeader({ title, intro }: { title: string; intro: React.ReactNode }) {
  return (
    <header className="grid grid-cols-1 gap-x-12 gap-y-5 pt-14 pb-16 md:grid-cols-12 md:pt-24 md:pb-20">
      <h1 className="text-4xl font-medium tracking-tight md:col-span-4 md:text-[56px] md:leading-[1.05]">
        {title}
      </h1>
      <div className="max-w-[56ch] text-lg leading-relaxed text-muted md:col-span-8 md:pt-3">{intro}</div>
    </header>
  );
}

export function SectionTitle({ children, aside }: { children: React.ReactNode; aside?: React.ReactNode }) {
  return (
    <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4 md:mb-12">
      <h2 className="text-[28px] font-medium tracking-tight md:text-4xl">{children}</h2>
      {aside}
    </div>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  const cls = "text-[15px] text-accent underline decoration-1 underline-offset-4 hover:decoration-2";
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Chips({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded border border-line bg-surface/60 px-2.5 py-0.5 text-[13px] text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

export function JobEntry({ job }: { job: Job }) {
  return (
    <article className="grid grid-cols-1 gap-x-12 gap-y-4 border-t border-line py-9 md:grid-cols-12">
      <div className="md:col-span-4">
        <p className="font-mono text-sm text-muted">{job.period}</p>
        <p className="mt-1 text-xl font-medium">{job.company}</p>
        {job.location && <p className="text-sm text-muted">{job.location}</p>}
        {job.current && (
          <p className="mt-3 inline-flex items-center gap-2 rounded bg-wash px-2 py-0.5 text-xs font-medium text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Current role
          </p>
        )}
      </div>
      <div className="md:col-span-8">
        <h3 className="text-xl font-medium">{job.role}</h3>
        {job.summary && <p className="mt-2 max-w-[60ch] leading-relaxed text-body">{job.summary}</p>}
        {job.highlights.length > 0 && (
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-body marker:text-muted">
            {job.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
        {job.stack.length > 0 && (
          <div className="mt-4">
            <Chips items={job.stack} />
          </div>
        )}
      </div>
    </article>
  );
}

export function Results({ results }: { results?: Project["results"] }) {
  if (!results || results.length === 0) return null;
  return (
    <dl className="flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-4">
      {results.map((r) => (
        <div key={r.label}>
          <dt className="sr-only">{r.label}</dt>
          <dd className="text-[22px] font-medium tracking-tight">{r.value}</dd>
          <dd className="text-[13px] text-muted">{r.label}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ProjectCard({
  project,
  layout = "stack",
  imageClass = "aspect-[16/10]",
  priority = false,
}: {
  project: Project;
  layout?: "stack" | "row";
  imageClass?: string;
  priority?: boolean;
}) {
  const row = layout === "row";
  return (
    <article
      className={`glass group relative flex overflow-hidden rounded-lg transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 ${
        row ? "flex-col md:flex-row" : "flex-col"
      }`}
    >
      {project.image && (
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          width={1400}
          height={875}
          priority={priority}
          className={`w-full object-cover object-top ${imageClass} ${
            row ? "border-b border-line md:w-[46%] md:border-r md:border-b-0" : "border-b border-line"
          }`}
        />
      )}
      <div className={`flex flex-1 flex-col gap-4 p-6 ${row ? "md:justify-center md:p-9" : "md:p-7"}`}>
        <div>
          <p className="text-[13px] text-muted">{project.kind}</p>
          <h3 className="mt-1 text-[22px] font-medium tracking-tight">
            <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
              {project.title}
            </Link>
          </h3>
        </div>
        <p className="leading-relaxed text-body">{project.summary}</p>
        <Results results={project.results} />
        <p className="text-[15px] text-accent">
          Read the case study <span aria-hidden="true">&rarr;</span>
        </p>
      </div>
    </article>
  );
}

export function WorkCard({ project, tinted = false }: { project: Project; tinted?: boolean }) {
  return (
    <article
      className={`group relative flex h-full flex-col gap-4 rounded-lg p-6 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 md:p-7 ${
        tinted ? "glass-tint" : "glass"
      }`}
    >
      <p className="text-[13px] text-muted">
        {project.kind}
        {project.period ? `, ${project.period}` : ""}
      </p>
      <h3 className="-mt-2 text-[22px] font-medium tracking-tight">
        <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
          {project.title}
        </Link>
      </h3>
      <p className="leading-relaxed text-body">{project.summary}</p>
      <p className="mt-auto font-mono text-[13px] leading-relaxed text-muted">{project.stack.join(", ")}</p>
      <p className="text-[15px] text-accent">
        Read the overview <span aria-hidden="true">&rarr;</span>
      </p>
    </article>
  );
}

export function ConfidentialNote() {
  return (
    <p className="mt-6 max-w-[64ch] text-sm text-muted">
      These systems are confidential, so they&apos;re shown as overviews only: no client names,
      screenshots or code.
    </p>
  );
}

// Work systems: the first two sit side by side on a tint; any after that pair up 7/5.
export function WorkGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
      {items.map((p, i) => (
        <div key={p.slug} className={i < 2 ? "md:col-span-6" : i % 2 === 0 ? "md:col-span-7" : "md:col-span-5"}>
          <WorkCard project={p} tinted={i < 2} />
        </div>
      ))}
    </div>
  );
}

export function ContactBand() {
  return (
    <section className="mt-28 grid grid-cols-1 gap-10 rounded-lg border border-band-line bg-band px-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_24px_50px_-28px_var(--glass-shadow)] py-12 text-on-band md:grid-cols-12 md:items-end md:px-16 md:py-18">
      <div className="md:col-span-6">
        <h2 className="text-[30px] font-medium tracking-tight md:text-[44px]">Let&apos;s talk</h2>
        <p className="mt-4 max-w-[40ch] text-lg text-band-muted">
          For roles, freelance work, or questions about anything here, email is the quickest way.
        </p>
      </div>
      <ul className="text-[17px] md:col-span-5 md:col-start-8">
        {[
          { href: `mailto:${profile.email}`, text: profile.email, label: "Email" },
          { href: profile.linkedin, text: "linkedin.com/in/me-moksh", label: "LinkedIn" },
          { href: profile.github, text: "github.com/MokshPShah", label: "GitHub" },
          { href: profile.whatsapp, text: "+91 94273 90651", label: "WhatsApp" },
        ].map((c) => (
          <li key={c.label} className="border-t border-band-line">
            <a
              href={c.href}
              {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center justify-between gap-4 py-3.5 hover:underline hover:underline-offset-4"
            >
              <span className="break-all">{c.text}</span>
              <span className="shrink-0 text-sm text-band-muted">{c.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
