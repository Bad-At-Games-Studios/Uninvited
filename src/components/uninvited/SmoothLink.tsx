import type { AnchorHTMLAttributes, MouseEvent } from "react";

/**
 * Anchor that smooth-scrolls to an in-page #section, and behaves like a normal
 * link for anything else (mailto:, external URLs).
 */
export function SmoothLink({
  href,
  onClick,
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (!href.startsWith("#") || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    (target as HTMLElement).focus?.({ preventScroll: true });
    window.history.replaceState(null, "", href);
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
