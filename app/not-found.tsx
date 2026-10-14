import Link from "next/link";
import { Container } from "@/components/blocks";

export default function NotFound() {
  return (
    <Container>
      <div className="pt-24 pb-10 md:pt-32">
        <p className="font-mono text-sm text-muted">404</p>
        <h1 className="mt-2 text-4xl font-medium tracking-tight md:text-[56px]">This page doesn&apos;t exist.</h1>
        <p className="mt-6 text-lg text-muted">
          It may have moved when the site was rebuilt.{" "}
          <Link href="/" className="text-accent underline decoration-1 underline-offset-4">
            Go to the home page
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
