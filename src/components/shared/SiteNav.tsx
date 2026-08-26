import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { navigation, gamesNavigation } from "@/content/site";

export function SiteNav({ currentPath }: { currentPath: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const homeAnchor = (href: string) => (currentPath === "/" ? href : `/${href}`);

  return (
    <header className="site-chrome sticky top-0 z-50 border-b border-border bg-background/95 supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" aria-label="Bad At Games home">
          <img
            src="/images/studio/logo.png"
            alt="Bad At Games"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={homeAnchor(item.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Games Dropdown (Desktop) */}
        <div className="hidden md:block">
          <div className="group relative">
            <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground flex items-center gap-1 py-2">
              Games
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute right-0 top-full mt-2 w-56 rounded-lg border border-border bg-background/95 backdrop-blur p-2 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-right z-50">
              {gamesNavigation.map((game) => (
                <Link
                  key={game.href}
                  to={game.href}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                  activeProps={{ className: "bg-accent text-foreground" }}
                >
                  {game.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-md border border-border p-2 md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="border-t border-border bg-background/95 backdrop-blur px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={homeAnchor(item.href)}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-border pt-4">
              <p className="mb-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Games
              </p>
              {gamesNavigation.map((game) => (
                <Link
                  key={game.href}
                  to={game.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  activeProps={{ className: "text-foreground" }}
                >
                  {game.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
