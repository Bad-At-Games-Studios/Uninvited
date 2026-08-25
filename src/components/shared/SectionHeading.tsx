interface SectionHeadingProps {
  kicker?: string;
  children: string;
  className?: string;
}

export function SectionHeading({ kicker, children, className = "" }: SectionHeadingProps) {
  return (
    <div className={className}>
      {kicker && (
        <p className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
          {kicker}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {children}
      </h2>
    </div>
  );
}
