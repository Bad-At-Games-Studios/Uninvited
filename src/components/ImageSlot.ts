export const ImageSlot = (src: string, alt: string, className?: string) => {
  return `<div class="image-slot ${className || ''}"><img src="${src}" alt="${alt}" /></div>`;
};
