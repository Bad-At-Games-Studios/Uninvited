import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/shared/SiteNav";
import { Footer } from "@/components/shared/Footer";
import { GameCard } from "@/components/shared/GameCard";
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { siteConfig } from "@/content/site";
import { gamesConfig } from "@/content/games";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: siteConfig.seo.title },
      { name: "description", content: siteConfig.seo.description },
      { property: "og:title", content: siteConfig.seo.title },
      { property: "og:description", content: siteConfig.seo.description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="theme-studio min-h-screen antialiased">
      <SiteNav currentPath="/" />
      <main>
        <section className="studio-hero border-b border-border">
          <div className="mx-auto grid max-w-7xl items-end gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <div>
              <p className="eyebrow text-primary">INDEPENDENT GAME STUDIO</p>
              <h1 className="mt-5 text-6xl font-extrabold leading-[0.9] tracking-tight text-foreground sm:text-8xl lg:text-9xl">
                BAD AT GAMES
              </h1>
              <p className="mt-7 max-w-2xl text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                WE MAKE GAMES. SOME GOOD. SOME BAD. MOSTLY BOTH.
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Bad At Games is an independent game studio making original games across genres and
                platforms.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton label="EXPLORE GAMES" href="#games" variant="primary" />
                <CTAButton label="ABOUT US" href="#about" variant="secondary" />
              </div>
            </div>
            <div className="hidden justify-self-end border-l border-primary/60 pl-5 font-mono text-xs leading-8 tracking-[0.18em] text-muted-foreground lg:block">
              <p>ORIGINAL GAMES</p>
              <p>BUILT IN-HOUSE</p>
              <p>STATUS: MAKING THINGS</p>
            </div>
          </div>
        </section>

        <section id="games" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <SectionHeading>OUR GAMES</SectionHeading>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            Different ideas. Different worlds. One independent studio.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {gamesConfig.slice(0, 4).map((game) => (
              <GameCard
                key={game.slug}
                slug={game.slug}
                title={game.title}
                type={game.type}
                status={game.status}
                shortDescription={game.shortDescription}
                cardImage={game.cardImage}
                cta={game.slug === "stayahead" ? "PLAY NOW" : game.cta}
                ctaLink={game.ctaLink}
                secondaryCta={game.slug === "stayahead" ? "WEB DEMO" : undefined}
                secondaryCtaLink={game.secondaryCtaLink}
                external={game.ctaLink.startsWith("http")}
              />
            ))}
          </div>
        </section>

        <section id="about" className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="max-w-2xl">
              <SectionHeading>ABOUT</SectionHeading>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Bad At Games is an independent game studio focused on creating original games
                  across different genres and platforms.
                </p>
                <p>
                  We like experimenting with ideas, building things ourselves, and making games with
                  a clear identity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <SectionHeading>GET IN TOUCH</SectionHeading>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-lg font-semibold text-foreground transition-colors hover:text-primary"
            >
              {siteConfig.email}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
