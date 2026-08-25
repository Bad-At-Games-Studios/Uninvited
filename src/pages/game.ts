import { SiteConfig, Game } from '../content/index';
import { SiteNav, initSiteNav } from '../components/SiteNav';
import { Footer } from '../components/Footer';
import { GameHero } from '../components/GameHero';
import { SectionHeading } from '../components/SectionHeading';
import { Gallery } from '../components/Gallery';
import { CTAButton } from '../components/CTAButton';
import { ImageSlot } from '../components/ImageSlot';

export const renderGamePage = (root: HTMLElement, game: Game, config: SiteConfig, allGames: Game[]) => {
  // Dynamically set SEO for the specific game page
  document.title = game.seoTitle || config.seo.defaultTitle;
  document.querySelector('meta[name="description"]')?.setAttribute('content', game.seoDescription || config.seo.defaultDescription);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', game.seoTitle || config.seo.defaultTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', game.seoDescription || config.seo.defaultDescription);
  document.querySelector('meta[property="og:image"]')?.setAttribute('content', game.ogImage || config.seo.defaultOgImage);
  document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', game.seoTitle || config.seo.defaultTitle);
  document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', game.seoDescription || config.seo.defaultDescription);
  document.querySelector('meta[property="twitter:image"]')?.setAttribute('content', game.ogImage || config.seo.defaultOgImage);

  let mainContent = '';

  if (game.slug === 'uninvited') {
    mainContent = `
      <section class="game-section uninvited-intro section container">
        <div class="uninvited-content">
          ${SectionHeading(game.title, game.tagline)}
          <p>${game.description}</p>
          <p class="coming-soon-text">COMING SOON</p>
          <div class="game-ctas">
            ${game.trailerUrl ? CTAButton('WATCH TRAILER', game.trailerUrl, true, '_blank') : ''}
          </div>
        </div>
      </section>
      ${game.sections?.map(section => `
        <section class="game-section uninvited-section section container">
          <h3>${section.title}</h3>
          <p>${section.content}</p>
        </section>
      `).join('') || ''}
      ${game.chapters?.length ? `
        <section class="game-section uninvited-chapters section container">
          <h3>CHAPTERS: EVERY JOB. A NEW STORY.</h3>
          <div class="chapters-grid">
            ${game.chapters.map(chapter => `
              <div class="chapter-card">
                <h4>${chapter.title}</h4>
                <p>${chapter.description}</p>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}
      ${Gallery(game.screenshots, 'Gallery')}
      <section class="game-info section container">
        <h3>GAME INFO:</h3>
        <ul>
          <li><strong>Genre:</strong> ${game.type}</li>
          <li><strong>Platform:</strong> ${game.platform}</li>
          <li><strong>Status:</strong> ${game.status}</li>
          <li><strong>Release:</strong> Coming Soon</li>
        </ul>
      </section>
    `;
  } else if (game.slug === 'stayahead') {
    mainContent = `
      <section class="game-section stayahead-intro section container">
        ${SectionHeading(game.title, game.tagline)}
        <p>${game.description}</p>
        <div class="game-ctas">
          ${CTAButton('PLAY NOW ON ANDROID', game.storeUrl || '#', true, '_blank')}
          ${CTAButton('PLAY WEB DEMO', game.webDemoUrl || '#', false, '_blank')}
        </div>
        <div class="stayahead-visuals">
            ${ImageSlot(game.iconImage || '#', 'Stay Ahead Icon', 'game-icon')}
            ${Gallery(game.screenshots, 'Screenshots')}
        </div>
      </section>
      ${game.features?.length ? `
        <section class="game-section stayahead-features section container">
          <h3>Gameplay Features:</h3>
          <ul class="features-list">
            ${game.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </section>
      ` : ''}
      <section class="game-info section container">
        <h3>GAME INFO:</h3>
        <ul>
          <li><strong>Genre:</strong> ${game.type}</li>
          <li><strong>Platform:</strong> ${game.platform}</li>
          <li><strong>Status:</strong> ${game.status}</li>
        </ul>
      </section>
    `;
  } else if (game.slug === 'not-compatible') {
    mainContent = `
      <section class="game-section not-compatible-intro section container">
        ${SectionHeading(game.title, game.tagline)}
        <p>${game.description}</p>
        <div class="game-ctas">
          ${CTAButton('PLAY WEB DEMO', game.webDemoUrl || '#', true, '_blank')}
        </div>
      </section>
      ${Gallery(game.screenshots, 'Screenshots')}
      <section class="game-info section container">
        <h3>GAME INFO:</h3>
        <ul>
          <li><strong>Genre:</strong> ${game.type}</li>
          <li><strong>Platform:</strong> ${game.platform}</li>
          <li><strong>Status:</strong> ${game.status}</li>
        </ul>
      </section>
    `;
  } else if (game.slug === 'supermarketshowdown') {
    mainContent = `
      <section class="game-section supermarket-showdown-intro section container text-center">
        ${SectionHeading(game.title, game.tagline)}
        <p>${game.description}</p>
        ${ImageSlot(game.heroImage, 'Supermarket Showdown Placeholder', 'coming-soon-placeholder')}
        <p class="coming-soon-message">Stay tuned for more updates!</p>
      </section>
    `;
  }

  root.innerHTML = `
    ${SiteNav(config, allGames, game.slug)}
    <main>
      ${GameHero(game)}
      ${mainContent}
    </main>
    ${Footer(config, allGames)}
  `;

  initSiteNav();
};
