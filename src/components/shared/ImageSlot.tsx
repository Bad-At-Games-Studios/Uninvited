interface ImageSlotProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export function ImageSlot({ src, alt, className = "", width, height }: ImageSlotProps) {
  return (
    <div className={`relative overflow-hidden bg-muted ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full object-cover"
        onError={(e) => {
          // Fallback to placeholder if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `
              <div class="flex h-full w-full items-center justify-center bg-muted p-4 text-center">
                <div>
                  <p class="text-sm font-medium text-foreground">${alt}</p>
                  <p class="text-xs text-muted-foreground mt-1">REPLACE WITH ACTUAL IMAGE</p>
                </div>
              </div>
            `;
          }
        }}
      />
    </div>
  );
}
