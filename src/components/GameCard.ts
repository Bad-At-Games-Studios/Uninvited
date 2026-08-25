import { Game } from '../content/index';

export const GameCard = (game: Game) => {
  return `
    <div class="game-card ${game.visualIdentity}">
      <a href="/games/${game.slug}.html">
        <div class="game-card-image">
          <img src="${game.cardImage}" alt="${game.title} Artwork">
        </div>
        <div class="game-card-content">
          <h3 class="game-card-title">${game.title}</h3>
          <p class="game-card-description">${game.tagline}</p>
          <div class="game-card-meta">
            <span class="status">${game.status}</span>
            <span class="platform">${game.platform}</span>
          </div>
          <button class="cta-button primary">${game.slug === 'stayahead' ? 'PLAY NOW' : (game.slug === 'not-compatible' ? 'PLAY WEB DEMO' : (game.slug === 'supermarketshowdown' ? 'COMING SOON' : 'EXPLORE GAME'))}</button>
          ${game.slug === 'stayahead' && game.webDemoUrl ? `<button class="cta-button secondary">WEB DEMO</button>` : ''}
        </div>
      </a>
    </div>
  `;
};
