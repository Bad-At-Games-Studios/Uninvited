import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/shared/SiteNav";
import { Footer } from "@/components/shared/Footer";
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { siteConfig } from "@/content/site";
import { supermarketShowdownContent } from "@/content/supermarketshowdown";

export const Route = createFileRoute("/supermarketshowdown")({
  head: () => ({
    meta: [
      { title: "Supermarket Showdown — Bad At Games" },
      { name: "description", content: supermarketShowdownContent.about.description },
      { property: "og:title", content: "Supermarket Showdown — Bad At Games" },
      { property: "og:description", content: supermarketShowdownContent.about.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SupermarketShowdownPage,
});

function SupermarketShowdownPage() {
  const { hero, about } = supermarketShowdownContent;

  return (
    <div className="theme-supermarketshowdown game-page-surface min-h-screen antialiased">
      <SiteNav currentPath="/supermarketshowdown" />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  const { hero } = supermarketShowdownContent;
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium tracking-widest text-primary uppercase">
            {hero.kicker}
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            SUPERMARKET SHOWDOWN
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl md:text-2xl">
            {hero.tagline}
          </p>
          <div className="mt-10 flex justify-center">
            <CTAButton
              label={hero.primaryCta.label}
              href={hero.primaryCta.href}
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const { about } = supermarketShowdownContent;
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading>{about.heading}</SectionHeading>
        <p className="mt-6 text-lg text-muted-foreground">{about.description}</p>
      </div>
    </section>
  );
}
