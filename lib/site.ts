import { profile } from "@/lib/content";

// The one canonical origin. Every canonical URL, sitemap entry and JSON-LD id is
// built from this, so search engines never see two addresses for the same page.
export const siteUrl = "https://www.shahmoksh.dev";

export const siteDescription =
  "Moksh Shah is a Full Stack Developer at Cultrd Growers LLP in Surat, India, building production and accounting ERPs in Next.js, TypeScript, tRPC and PostgreSQL.";

export const keywords = [
  "Moksh Shah",
  "Moksh Shah developer",
  "Moksh Shah portfolio",
  "Full Stack Developer Surat",
  "Full Stack Developer India",
  "Next.js developer Surat",
  "TypeScript developer",
  "React developer Surat",
  "ERP developer",
  "Cultrd Growers LLP",
];

export const absoluteUrl = (path = "/") => new URL(path, siteUrl).toString();

export const personId = `${siteUrl}/#person`;
export const websiteId = `${siteUrl}/#website`;

export const personSchema = {
  "@type": "Person",
  "@id": personId,
  name: profile.name,
  url: siteUrl,
  image: absoluteUrl("/profile.png"),
  email: `mailto:${profile.email}`,
  jobTitle: profile.title,
  description: siteDescription,
  worksFor: { "@type": "Organization", name: profile.company },
  address: { "@type": "PostalAddress", addressLocality: "Surat", addressRegion: "Gujarat", addressCountry: "IN" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Vidhyadeep University" },
    { "@type": "HighSchool", name: "Shri C.C. Shah English High School" },
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "tRPC",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "Electron",
    "Tailwind CSS",
    "ERP software",
  ],
  sameAs: [profile.github, profile.linkedin],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": websiteId,
  url: siteUrl,
  name: profile.name,
  description: siteDescription,
  inLanguage: "en-IN",
  publisher: { "@id": personId },
};

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

// Child pages replace (not merge) openGraph and twitter, so every page builds the
// full set here: canonical URL, share title and description.
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }) {
  const shareTitle = `${title} | ${profile.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website" as const,
      locale: "en_IN",
      siteName: profile.name,
      url: path,
      title: shareTitle,
      description,
      // The site-wide card from app/opengraph-image.tsx. Project pages have their
      // own image files, which take priority over this.
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${profile.name}, ${profile.title}` }],
    },
    twitter: { card: "summary_large_image" as const, title: shareTitle, description, images: ["/twitter-image"] },
  };
}
