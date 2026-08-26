import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/shared/SiteNav";
import { Footer } from "@/components/shared/Footer";
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { stayAheadContent } from "@/content/stayahead";

export const Route = createFileRoute("/stayahead")({
  head: () => ({
    meta: [
      { title: "Stay Ahead — Endless Runner | Bad At Games" },
      { name: "description", content: stayAheadContent.about.description },
      { property: "og:title", content: "Stay Ahead — Endless Runner | Bad At Games" },
      { property: "og:description", content: stayAheadContent.about.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StayAheadPage,
});

function StayAheadPage() {
  const { hero, zones, screenshots } = stayAheadContent;

  return (
    <div className="theme-stayahead game-page-surface min-h-screen antialiased">
      <SiteNav currentPath="/stayahead" />
      <main>
        <Hero />
        <About />
        <Zones />
        <Screenshots />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  const { hero } = stayAheadContent;
  return (
    <section className="stayahead-hero relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden border-b border-border">
      <div className="stayahead-hero__content relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:py-20">
        <div className="stayahead-hero__copy max-w-xl">
          <p className="stayahead-kicker">{hero.kicker}</p>
          <h1 className="stayahead-title mt-4 max-w-2xl font-display tracking-tight text-foreground">
            <span className="block">STAY</span>
            <span className="block">AHEAD</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/90 sm:text-xl">
            {hero.tagline}
          </p>
        </div>
        <div className="stayahead-hero__gameplay justify-self-end">
          <img src={hero.heroImage} alt={hero.heroImageAlt} />
        </div>
      </div>
    </section>
  );
}

function About() {
  const { about } = stayAheadContent;
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading>{about.heading}</SectionHeading>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {about.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {stayAheadContent.hero.playBadgeImage && (
              <a
                href={stayAheadContent.hero.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="stayahead-play-badge"
              >
                <img src={stayAheadContent.hero.playBadgeImage} alt="Get it on Google Play" />
              </a>
            )}
            <CTAButton
              label={stayAheadContent.hero.secondaryCta.label}
              href={stayAheadContent.hero.secondaryCta.href}
              variant="secondary"
              external
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Zones() {
  const { zones } = stayAheadContent;
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading>{zones.heading}</SectionHeading>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div className="stayahead-zone stayahead-zone--comfort rounded-lg border border-border bg-card p-8">
            <h3 className="text-2xl font-bold text-foreground">{zones.comfort.title}</h3>
            <p className="mt-4 text-muted-foreground">{zones.comfort.description}</p>
          </div>
          <div className="stayahead-zone stayahead-zone--rage rounded-lg border border-border bg-card p-8">
            <h3 className="text-2xl font-bold text-foreground">{zones.rage.title}</h3>
            <p className="mt-4 text-muted-foreground">{zones.rage.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gameplay() {
  const { gameplay } = stayAheadContent;
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading>{gameplay.heading}</SectionHeading>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gameplay.features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-6 transition-colors hover:bg-accent"
            >
              <p className="font-medium text-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Screenshots() {
  const { screenshots } = stayAheadContent;

  return (
    <section className="stayahead-gallery mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="stayahead-kicker">IN THE RUN</p>
      <SectionHeading>{screenshots.heading}</SectionHeading>
      <p className="mt-3 max-w-xl text-lg text-muted-foreground">{screenshots.description}</p>
      <div className="stayahead-editorial-grid mt-8">
        {screenshots.images.map((image, index) => (
          <figure key={image.src} className={`stayahead-shot stayahead-shot--${index + 1}`}>
            <div className="stayahead-shot__frame">
              {image.type === "video" ? (
                <iframe
                  src={youtubeEmbedUrl(image.src)}
                  title={image.alt}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img src={image.src} alt={image.alt} loading="lazy" />
              )}
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}

function youtubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);
    const videoId =
      parsedUrl.hostname === "youtu.be"
        ? parsedUrl.pathname.slice(1)
        : parsedUrl.searchParams.get("v") || parsedUrl.pathname.split("/").pop();

    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  } catch {
    return url;
  }
}
