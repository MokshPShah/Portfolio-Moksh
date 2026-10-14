import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

// One share-card layout for every page: what the page is, a line about it, and the
// name and domain along the bottom, in the site's light palette.
export function ogCard({ eyebrow, title, line }: { eyebrow: string; title: string; line: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f7f7f5",
          color: "#15191f",
          borderTop: "14px solid #0c6b57",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#0c6b57", fontWeight: 600 }}>{eyebrow}</div>
          <div style={{ fontSize: title.length > 34 ? 66 : 80, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, marginTop: 22, maxWidth: 1000 }}>
            {title}
          </div>
          <div style={{ fontSize: 30, color: "#5a6270", marginTop: 26, maxWidth: 940, lineHeight: 1.35 }}>{line}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, borderTop: "2px solid #dfe2df", paddingTop: 26 }}>
          <span style={{ fontWeight: 600 }}>Moksh Shah</span>
          <span style={{ color: "#5a6270" }}>shahmoksh.dev</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
