import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/shared/SiteNav";
import { Footer } from "@/components/shared/Footer";
import { GameCard } from "@/components/shared/GameCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { siteConfig } from "@/content/site";
import { gamesConfig } from "@/content/games";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: `Games — ${siteConfig.siteName}` },
      { name: "description", content: `Explore all games from ${siteConfig.siteName}. Original games across different genres and platforms.` },
      { property: "og:title", content: `Games — ${siteConfig.siteName}` },
      { property: "og:description", content: `Explore all games from ${siteConfig.siteName}.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GamesPage,
});

function GamesPage() {
  return (
    <div className="theme-studio min-h-screen antialiased">
      <SiteNav currentPath="/games" />
      <main className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading kicker="ALL GAMES" heading="Our Games" />
        <p className="mt-4 text-lg text-muted-foreground">
          Explore our collection of original games across different genres and platforms.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {gamesConfig.map((game) => (
            <GameCard
              key={game.slug}
              slug={game.slug}
              title={game.title}
              type={game.type}
              status={game.status}
              shortDescription={game.shortDescription}
              cardImage={game.cardImage}
              cta={game.cta}
              ctaLink={game.ctaLink}
              secondaryCta={game.secondaryCta}
              secondaryCtaLink={game.secondaryCtaLink}
              external={game.ctaLink.startsWith("http")}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
