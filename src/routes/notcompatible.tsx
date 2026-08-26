import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/shared/SiteNav";
import { Footer } from "@/components/shared/Footer";
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Gallery } from "@/components/shared/Gallery";
import { siteConfig } from "@/content/site";
import { notCompatibleContent } from "@/content/notcompatible";

export const Route = createFileRoute("/notcompatible")({
  head: () => ({
    meta: [
      { title: "Not Compatible — Bad At Games" },
      { name: "description", content: notCompatibleContent.about.description },
      { property: "og:title", content: "Not Compatible — Bad At Games" },
      { property: "og:description", content: notCompatibleContent.about.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NotCompatiblePage,
});

function NotCompatiblePage() {
  const { hero, about, screenshots } = notCompatibleContent;

  return (
    <div className="theme-notcompatible game-page-surface min-h-screen antialiased">
      <SiteNav currentPath="/notcompatible" />
      <main>
        <Hero />
        <About />
        <Screenshots />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  const { hero } = notCompatibleContent;
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="game-label text-sm tracking-widest text-primary uppercase">{hero.kicker}</p>
          <h1 className="game-title mt-4 font-mono text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            NOT COMPATIBLE
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl md:text-2xl">
            {hero.tagline}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CTAButton
              label={hero.primaryCta.label}
              href={hero.primaryCta.href}
              variant="primary"
              external
            />
            {hero.secondaryCta && (
              <CTAButton
                label={hero.secondaryCta.label}
                href={hero.secondaryCta.href}
                variant="secondary"
                external
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const { about } = notCompatibleContent;
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading>{about.heading}</SectionHeading>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {about.description}
        </p>
      </div>
    </section>
  );
}

function Gameplay() {
  const { gameplay } = notCompatibleContent;
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading heading={gameplay.heading} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gameplay.features.map((feature, index) => (
            <div
              key={index}
              className="rounded border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <p className="font-mono text-sm text-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Screenshots() {
  const { screenshots } = notCompatibleContent;
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Gallery
        heading={screenshots.heading}
        images={screenshots.images.map((src) => ({ src, alt: "Not Compatible screenshot" }))}
      />
    </section>
  );
}
