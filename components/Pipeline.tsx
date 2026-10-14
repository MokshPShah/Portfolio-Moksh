type Stage = { when: string; title: string; body: string; state: "done" | "current" | "next" };

// Career shown the way the production ERP shows an order: stages along a line,
// finished ones filled, the current one marked, the next one still open.
export function Pipeline({ stages }: { stages: Stage[] }) {
  return (
    <ol className="relative grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-6">
      {/* Connecting line: vertical on phones, horizontal from md up */}
      <li
        aria-hidden="true"
        className="pointer-events-none absolute top-2 bottom-2 left-[7px] w-px list-none bg-line md:top-[7px] md:right-0 md:bottom-auto md:left-0 md:h-px md:w-auto"
      />
      {stages.map((s) => (
        <li key={s.title} className="relative pl-9 md:pt-9 md:pl-0">
          <span
            aria-hidden="true"
            className={[
              "absolute top-1 left-0 h-[15px] w-[15px] rounded-full md:top-0",
              s.state === "done" ? "bg-accent" : "",
              s.state === "current" ? "border-2 border-accent bg-paper ring-4 ring-accent/15" : "",
              s.state === "next" ? "border border-dashed border-muted bg-paper" : "",
            ].join(" ")}
          />
          <p className="font-mono text-sm text-muted tabular-nums">{s.when}</p>
          <h3 className="mt-1 text-lg leading-snug font-medium">{s.title}</h3>
          <p className="mt-1 text-[15px] leading-relaxed text-muted">{s.body}</p>
          {s.state === "current" && (
            <p className="mt-2 inline-block rounded bg-wash px-2 py-0.5 text-xs font-medium text-accent">In progress</p>
          )}
          {s.state === "next" && <p className="mt-2 text-xs font-medium text-muted">Up next</p>}
        </li>
      ))}
    </ol>
  );
}
