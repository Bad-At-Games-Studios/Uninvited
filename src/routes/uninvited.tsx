import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { content } from "@/content/uninvited";
import { SiteNav } from "@/components/shared/SiteNav";
import { Footer } from "@/components/shared/Footer";
import { SmoothLink } from "@/components/uninvited/SmoothLink";
import { Reveal, useActiveSection } from "@/components/uninvited/Reveal";

export const Route = createFileRoute("/uninvited")({
  head: () => ({
    meta: [
      { title: "Uninvited — Puzzle Adventure Game | Bad At Games" },
      {
        name: "description",
        content:
          "An upcoming puzzle-adventure game where you play as a thief, exploring mysterious locations, solving puzzles, uncovering stories, and escaping.",
      },
      { property: "og:title", content: "Uninvited — Puzzle Adventure Game | Bad At Games" },
      {
        property: "og:description",
        content:
          "An upcoming puzzle-adventure game where you play as a thief, exploring mysterious locations, solving puzzles, uncovering stories, and escaping.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UninvitedPage,
});

function UninvitedPage() {
  return (
    <div className="theme-uninvited game-page-surface grain-surface min-h-screen antialiased">
      <SiteNav currentPath="/uninvited" />
      <main id="top">
        <Hero />
        <Gameplay />
        <Story />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

/* ── Header (Removed - using shared SiteNav) ─────────────────────────────────────────────────────────── */

/* ── Hero ───────────────────────────────────────────────────────────── */

function Hero() {
  const { hero, brand } = content;
  return (
    <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden">
      <img
        src={hero.image}
        alt={hero.imageAlt}
        width={1920}
        height={1088}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-80"
      />
      <div
        aria-hidden="true"
        className="uninvited-hero-overlay absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--background)_0%,transparent_45%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <p className="eyebrow">{hero.kicker}</p>
        <h1 className="uninvited-title mt-5 font-type text-[clamp(3.5rem,15vw,11rem)] leading-[0.82] tracking-[0.04em] text-foreground">
          <span className="brush-mark rough-text">{brand.title}</span>
        </h1>
        <p className="mt-9 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {hero.tagline}
        </p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {content.about.lead}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <SmoothLink
            href={hero.primaryCta.href}
            className="eyebrow inline-flex items-center gap-3 bg-primary px-7 py-4 text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            {hero.primaryCta.label}
          </SmoothLink>
          <SmoothLink
            href={hero.secondaryCta.href}
            className="eyebrow inline-flex items-center gap-3 border border-border px-7 py-4 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {hero.secondaryCta.label}
          </SmoothLink>
        </div>

        <p className="mt-12 font-hand text-xl text-accent">{brand.studio}</p>
      </div>
    </section>
  );
}

/* ── Shared bits ────────────────────────────────────────────────────── */

function SectionHeading({ kicker, children }: { kicker?: string; children: string }) {
  return (
    <div>
      {kicker && <p className="eyebrow tick mb-4">{kicker}</p>}
      <h2 className="font-display text-[clamp(2rem,5.5vw,3.6rem)] leading-[0.95] tracking-wide text-foreground">
        <span className="brush-mark rough-text">{children}</span>
      </h2>
    </div>
  );
}

function Hairline() {
  return <div aria-hidden="true" className="hairline mx-auto max-w-7xl" />;
}

/* ── About (Removed - content moved to Gameplay) ─────────────────────────────────────────────────────────── */

/* ── Gameplay ───────────────────────────────────────────────────────── */

function Gameplay() {
  const { gameplay } = content;
  return (
    <>
      <Hairline />
      <section id="gameplay" tabIndex={-1} className="mx-auto max-w-7xl section-pad px-5 sm:px-8">
        <SectionHeading kicker="GAMEPLAY">{gameplay.heading}</SectionHeading>
        <p className="mt-6 max-w-xl text-muted-foreground">{gameplay.lead}</p>

        <ol className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {gameplay.steps.map((step) => (
            <li
              key={step.number}
              className="group bg-background p-8 transition-colors hover:bg-card"
            >
              <span className="font-display text-5xl text-primary/70 transition-colors group-hover:text-primary">
                {step.number}
              </span>
              <h3 className="mt-6 font-display text-lg tracking-widest text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

/* ── Story ──────────────────────────────────────────────────────────── */

function Story() {
  const { story } = content;
  return (
    <>
      <Hairline />
      <section id="story" tabIndex={-1} className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-14 section-pad px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div className="tape photo-card border border-border bg-card p-3">
            <img
              src={story.image}
              alt={story.imageAlt}
              loading="lazy"
              width={1536}
              height={1024}
              className="aspect-[3/2] w-full object-cover"
            />
          </div>

          <div>
            <p className="eyebrow tick text-primary">{story.kicker}</p>
            <h2 className="uninvited-title mt-4 font-type text-[clamp(2.2rem,6vw,4rem)] leading-[0.95] tracking-wide text-foreground">
              <span className="brush-mark rough-text">{story.heading}</span>
            </h2>
            {story.copy.map((para) => (
              <p key={para} className="mt-6 leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}

            <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-8">
              {story.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="eyebrow">{fact.label}</dt>
                  <dd className="mt-2 font-display text-2xl tracking-wide text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Trailer ────────────────────────────────────────────────────────── */

function Trailer() {
  const { trailer } = content;
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <Hairline />
      <section
        id="trailer"
        tabIndex={-1}
        className="mx-auto max-w-6xl section-pad px-5 text-center sm:px-8"
      >
        <SectionHeading kicker="TRAILER">{trailer.heading}</SectionHeading>
        <p className="mx-auto mt-6 max-w-lg text-muted-foreground">{trailer.copy}</p>

        <div className="mt-12 border border-border bg-card p-2 shadow-[0_40px_100px_-50px_oklch(0_0_0/1)]">
          <div className="relative aspect-video w-full overflow-hidden bg-background">
            {playing ? (
              <iframe
                src={`${trailer.embedUrl}?autoplay=1`}
                title={trailer.embedTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 h-full w-full"
                aria-label={`Play ${trailer.embedTitle}`}
              >
                <img
                  src={trailer.poster}
                  alt=""
                  loading="lazy"
                  width={1920}
                  height={1088}
                  className="h-full w-full object-cover opacity-60 transition-opacity group-hover:opacity-80"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-primary bg-background/60 transition-transform group-hover:scale-110">
                    <span className="ml-1 block h-0 w-0 border-y-[12px] border-l-[20px] border-y-transparent border-l-primary" />
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Gallery ────────────────────────────────────────────────────────── */

function Gallery() {
  const { gallery } = content;
  return (
    <>
      <Hairline />
      <section id="gallery" tabIndex={-1} className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading kicker="GALLERY">{gallery.heading}</SectionHeading>
        </div>

        <ul className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:px-8">
          {gallery.images.map((image, i) => (
            <li
              key={`${image.alt}-${i}`}
              className="photo-card w-[78vw] shrink-0 snap-start border border-border bg-card p-2 sm:w-[46vw] lg:w-[31vw]"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={1280}
                height={800}
                className="aspect-[16/10] w-full object-cover grayscale-[0.2] transition duration-700 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

/* ── Info ───────────────────────────────────────────────────────────── */

function Info() {
  const { info } = content;
  return (
    <>
      <Hairline />
      <section id="info" tabIndex={-1} className="mx-auto max-w-7xl section-pad px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading>{info.heading}</SectionHeading>
          <dl className="divide-y divide-border border-y border-border">
            {info.rows.map((row) => (
              <div key={row.label} className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-8">
                <dt className="eyebrow sm:w-44 sm:shrink-0 sm:pt-1">{row.label}</dt>
                <dd className="text-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

/* ── Footer (Removed - using shared Footer) ─────────────────────────────────────────────────────────── */
