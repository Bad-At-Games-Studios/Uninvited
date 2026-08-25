import { Game } from '../content/index';
import { CTAButton } from './CTAButton';

export const GameHero = (game: Game) => {
  const primaryCtaText = game.slug === 'stayahead' ? 'PLAY NOW ON ANDROID' : 
                         (game.slug === 'not-compatible' ? 'PLAY WEB DEMO' : 
                         (game.slug === 'supermarketshowdown' ? 'COMING SOON' : 'EXPLORE GAME'));

  const primaryCtaHref = game.slug === 'stayahead' ? game.storeUrl || '#' : 
                         (game.slug === 'not-compatible' ? game.webDemoUrl || '#' : 
                         (game.slug === 'supermarketshowdown' ? '#' : `/games/${game.slug}.html`));

  return `
    <section class="game-hero ${game.visualIdentity}">
      <div class="hero-background">
        <img src="${game.heroImage}" alt="${game.title} Hero Image">
      </div>
      <div class="hero-content container">
        <h1>${game.title}</h1>
        <p class="tagline">${game.tagline}</p>
        <p class="description">${game.description}</p>
        <div class="hero-ctas">
          ${CTAButton(primaryCtaText, primaryCtaHref, true, game.storeUrl || game.webDemoUrl ? '_blank' : '_self')}
          ${game.slug === 'stayahead' && game.webDemoUrl ? CTAButton('PLAY WEB DEMO', game.webDemoUrl, false, '_blank') : ''}
          ${game.slug === 'uninvited' && game.trailerUrl ? CTAButton('WATCH TRAILER', game.trailerUrl, false, '_blank') : ''}
        </div>
        ${game.status ? `<p class="game-status">Status: <span>${game.status}</span></p>` : ''}
      </div>
    </section>
  `;
};
