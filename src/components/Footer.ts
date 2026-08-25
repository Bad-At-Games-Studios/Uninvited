import { SiteConfig, Game } from '../content/index';

export const Footer = (config: SiteConfig, allGames: Game[]) => {
  const gameLinks = allGames.map(game => `
    <li><a href="/games/${game.slug}.html">${game.title}</a></li>
  `).join('');

  return `
    <footer class="site-footer section">
      <div class="container">
        <div class="footer-main">
          <div class="footer-brand">
            <h3>${config.studioName}</h3>
          </div>
          <div class="footer-nav">
            <h4>Games</h4>
            <ul>
              ${gameLinks}
            </ul>
          </div>
          <div class="footer-social">
            <h4>Social</h4>
            <ul>
              <li><a href="${config.socialLinks.discord}" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a href="${config.socialLinks.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="${config.socialLinks.youtube}" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="${config.socialLinks.x}" target="_blank" rel="noopener noreferrer">X / Twitter</a></li>
            </ul>
          </div>
          <div class="footer-contact">
            <h4>Contact</h4>
            <p><a href="mailto:${config.contactEmail}">${config.contactEmail}</a></p>
          </div>
        </div>
        <div class="footer-copyright">
          <p>&copy; 2026 ${config.studioName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
};
