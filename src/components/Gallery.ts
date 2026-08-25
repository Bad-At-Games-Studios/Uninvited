export const Gallery = (images: string[], title: string = "Gallery") => {
  if (!images || images.length === 0) return '';

  const galleryItems = images.map(src => `
    <div class="gallery-item">
      <img src="${src}" alt="Gallery Image">
    </div>
  `).join('');

  return `
    <section class="gallery-section section">
      <div class="container">
        <h3>${title}</h3>
        <div class="gallery-grid">
          ${galleryItems}
        </div>
      </div>
    </section>
  `;
};
