import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { content } from "@/content/uninvited";
import { SmoothLink } from "@/components/uninvited/SmoothLink";
import { Reveal, useActiveSection } from "@/components/uninvited/Reveal";

export const Route = createFileRoute("/uninvited")({
  head: () => ({
    meta: [
      { title: "UNINVITED — A first-person thief & detective puzzle adventure" },
      {
        name: "description",
        content:
          "Uninvited is a slow-burn breaking-and-entering mystery. Pick the lock, read the room, and leave with the truth before the lights come back on.",
      },
      { property: "og:title", content: "UNINVITED — thief & detective puzzle adventure" },
      {
        property: "og:description",
        content:
          "One house. One night. No quest markers. Uninvited is a first-person puzzle mystery from Hollow Lamp Studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UninvitedPage,
});

function UninvitedPage() {
  return (
    <div className="theme-uninvited grain-surface min-h-screen antialiased">
      <SiteHeader />
      <main id="top">
        <Hero />
        <About />
        <Gameplay />
        <Story />
        <Trailer />
        <Gallery />
        <Info />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ── Header ─────────────────────────────────────────────────────────── */

function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(content.nav.map((item) => item.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <SmoothLink
          href="#top"
          className="font-display text-xl tracking-[0.28em] text-foreground"
        >
          {content.brand.title}
        </SmoothLink>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {content.nav.map((item) => (
            <SmoothLink
              key={item.href}
              href={item.href}
              data-active={active === item.href.slice(1)}
              aria-current={active === item.href.slice(1) ? "true" : undefined}
              className="eyebrow nav-link transition-colors hover:text-foreground data-[active=true]:text-foreground"
            >
              {item.label}
            </SmoothLink>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="eyebrow rounded-sm border border-border px-3 py-2 text-foreground md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-border bg-background/95 px-5 pb-6 pt-2 md:hidden"
        >
          {content.nav.map((item) => (
            <SmoothLink
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 font-display text-lg tracking-widest text-foreground"
            >
              {item.label}
            </SmoothLink>
          ))}
        </nav>
      )}
    </header>
  );
}

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
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,var(--background)_4%,transparent_55%),linear-gradient(to_right,var(--background)_0%,transparent_45%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <p className="eyebrow">{hero.kicker}</p>
        <h1 className="mt-5 font-display text-[clamp(3.5rem,15vw,11rem)] leading-[0.82] tracking-[0.04em] text-foreground">
          <span className="brush-mark rough-text">{brand.title}</span>
        </h1>
        <p className="mt-9 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {hero.tagline}
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

/* ── About ──────────────────────────────────────────────────────────── */

function About() {
  const { about } = content;
  return (
    <>
      <Hairline />
      <section id="about" tabIndex={-1} className="mx-auto max-w-7xl section-pad px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading kicker="01 — The premise">{about.heading}</SectionHeading>
          <div>
            <p className="font-hand text-2xl leading-snug text-accent sm:text-3xl">{about.lead}</p>
            {about.body.map((para) => (
              <p key={para} className="mt-6 leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}
          </div>
        </div>

        <ul className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {about.cards.map((card, i) => (
            <li
              key={card.title}
              className="tape photo-card border border-border bg-card p-3"
              style={{ transform: `rotate(${i === 1 ? 0.8 : i === 2 ? -0.6 : -1.1}deg)` }}
            >
              <img
                src={card.image}
                alt={card.alt}
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover grayscale-[0.25] transition duration-700 hover:grayscale-0"
              />
              <div className="px-3 py-5">
                <h3 className="font-display text-xl tracking-wider text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.copy}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

/* ── Gameplay ───────────────────────────────────────────────────────── */

function Gameplay() {
  const { gameplay } = content;
  return (
    <>
      <Hairline />
      <section
        id="gameplay"
        tabIndex={-1}
        className="mx-auto max-w-7xl section-pad px-5 sm:px-8"
      >
        <SectionHeading kicker="02 — Loop">{gameplay.heading}</SectionHeading>
        <p className="mt-6 max-w-xl text-muted-foreground">{gameplay.lead}</p>

        <ol className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {gameplay.steps.map((step) => (
            <li key={step.number} className="group bg-background p-8 transition-colors hover:bg-card">
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
            <h2 className="mt-4 font-display text-[clamp(2.2rem,6vw,4rem)] leading-[0.95] tracking-wide text-foreground">
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
        <SectionHeading kicker="03 — Trailer">{trailer.heading}</SectionHeading>
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
          <SectionHeading kicker="04 — Gallery">{gallery.heading}</SectionHeading>
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
          <SectionHeading kicker="05 — Fact sheet">{info.heading}</SectionHeading>
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

/* ── Footer ─────────────────────────────────────────────────────────── */

function SiteFooter() {
  const { footer, brand } = content;
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-display text-4xl tracking-[0.22em] text-foreground">{brand.title}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            {footer.line}
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:items-end">
          <nav aria-label="Footer" className="flex flex-wrap gap-6">
            {footer.links.map((link) => (
              <SmoothLink
                key={link.label}
                href={link.href}
                className="eyebrow transition-colors hover:text-primary"
              >
                {link.label}
              </SmoothLink>
            ))}
          </nav>
          <p className="text-xs text-muted-foreground">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
