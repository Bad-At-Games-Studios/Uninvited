interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
  heading?: string;
  className?: string;
}

export function Gallery({ images, heading, className = "" }: GalleryProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      {heading && (
        <h3 className="mb-6 text-2xl font-bold text-foreground">{heading}</h3>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="aspect-video overflow-hidden rounded-lg border border-border bg-muted"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="flex h-full w-full items-center justify-center bg-muted p-4 text-center">
                      <p class="text-xs text-muted-foreground">REPLACE WITH ACTUAL IMAGE</p>
                    </div>
                  `;
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
