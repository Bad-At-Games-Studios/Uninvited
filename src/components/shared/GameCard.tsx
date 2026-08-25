import { Link } from "@tanstack/react-router";
import { CTAButton } from "./CTAButton";

interface GameCardProps {
  slug: string;
  title: string;
  type: string;
  status: string;
  shortDescription: string;
  cardImage: string;
  cta: string;
  ctaLink: string;
  secondaryCta?: string;
  secondaryCtaLink?: string;
  external?: boolean;
}

export function GameCard({
  slug,
  title,
  type,
  status,
  shortDescription,
  cardImage,
  cta,
  ctaLink,
  secondaryCta,
  secondaryCtaLink,
  external = false,
}: GameCardProps) {
  const gamePath = slug === "notcompatible" ? "/notcompatible" : `/${slug}`;

  return (
    <article
      className={`game-card game-card--${slug} group overflow-hidden border border-border bg-card transition-all hover:-translate-y-1`}
    >
      {/* Card Image */}
      <Link
        to={gamePath}
        className="block aspect-[4/3] overflow-hidden bg-muted"
        aria-label={`Explore ${title}`}
      >
        <img
          src={cardImage}
          alt={`${title} game card`}
          width={1280}
          height={960}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Card Content */}
      <div className="game-card__content p-6 sm:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <span className="game-card__meta text-muted-foreground">{type}</span>
          <span className="game-card__meta text-primary">{status}</span>
        </div>

        <Link to={gamePath} className="block">
          <h3 className="text-3xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-4xl">
            {title}
          </h3>
        </Link>
        <p className="mt-4 min-h-12 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {shortDescription}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          <CTAButton
            label={cta}
            href={ctaLink}
            variant="primary"
            external={external}
            className="flex-1"
          />
          {secondaryCta && secondaryCtaLink && (
            <CTAButton
              label={secondaryCta}
              href={secondaryCtaLink}
              variant="secondary"
              external={external}
              className="flex-1"
            />
          )}
        </div>
      </div>
    </article>
  );
}
