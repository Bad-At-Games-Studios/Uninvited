import { Link } from "@tanstack/react-router";

interface CTAButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

export function CTAButton({
  label,
  href,
  variant = "primary",
  external = false,
  className = "",
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-200";

  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
    secondary:
      "border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className} font-semibold tracking-wide`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonStyles}>
        {label}
      </a>
    );
  }

  return (
    <Link to={href} className={buttonStyles}>
      {label}
    </Link>
  );
}
