// A jewelry price tag, the kind tied to a piece on the workshop floor.
// Used once, under the portrait, to carry the three facts a visitor checks first.
export function JewelryTag({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <div className="relative z-10 -mt-10 ml-5 w-fit -rotate-3 md:-mt-14 md:-ml-8">
      {/* The string, looping up from the hole towards the photo */}
      <svg
        aria-hidden="true"
        className="absolute -top-9 left-[18px] h-12 w-16 text-muted"
        viewBox="0 0 64 48"
        fill="none"
      >
        <path d="M6 46 C 2 30, 14 14, 34 10 S 60 4, 62 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>

      <div className="[filter:drop-shadow(0_0_0.5px_var(--muted))_drop-shadow(0_10px_18px_var(--glass-shadow))]">
        <div className="relative bg-[var(--glass-fill)] py-4 pr-6 pl-12 backdrop-blur-[18px] backdrop-saturate-[1.6] [clip-path:polygon(28px_0,100%_0,100%_100%,28px_100%,0_50%)]">
          <span
            aria-hidden="true"
            className="absolute top-1/2 left-[14px] h-3 w-3 -translate-y-1/2 rounded-full border border-muted/60 bg-paper"
          />
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
            {rows.map((r) => (
              <div key={r.label} className="contents">
                <dt className="pt-px font-mono text-[11px] tracking-wide text-muted uppercase">{r.label}</dt>
                <dd className="font-medium">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
