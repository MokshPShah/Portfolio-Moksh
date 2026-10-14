import type { Metadata } from "next";
import { absoluteUrl, breadcrumbs, pageMetadata, personId } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Moksh Shah, Full Stack Developer in Surat, about roles, freelance work or projects, by email, WhatsApp, LinkedIn or the contact form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          { "@type": "ContactPage", url: absoluteUrl("/contact"), name: "Contact Moksh Shah", about: { "@id": personId } },
          breadcrumbs([{ name: "Contact", path: "/contact" }]),
        ]}
      />
      <ContactContent />
    </>
  );
}
