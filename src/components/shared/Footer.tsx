import { Link } from "@tanstack/react-router";
import { siteConfig, navigation, gamesNavigation } from "@/content/site";

export function Footer() {
  const homeAnchor = (href: string) => (href.startsWith("#") ? `/${href}` : href);

  return (
    <footer className="site-chrome border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <img
                src="/images/studio/logo.png"
                alt="Bad At Games"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Independent games. Different ideas. Mostly questionable decisions.
            </p>
          </div>

          {/* Games */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Games</h4>
            <ul className="space-y-2">
              {gamesNavigation.map((game) => (
                <li key={game.href}>
                  <Link
                    to={game.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {game.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Navigate</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={homeAnchor(item.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">{siteConfig.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
