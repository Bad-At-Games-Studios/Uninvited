import { SiteConfig, Game } from '../content/index';

export const SiteNav = (config: SiteConfig, allGames: Game[], currentPageSlug?: string) => {
  const gameLinks = allGames.map(game => `
    <li><a href="/games/${game.slug}.html" class="${currentPageSlug === game.slug ? 'active' : ''}">${game.title}</a></li>
  `).join('');

  const navLinks = config.navigation.map(link => `
    <li><a href="${link.href}" class="${window.location.pathname.includes(link.href.replace('/', '')) ? 'active' : ''}">${link.name}</a></li>
  `).join('');

  return `
    <nav class="site-nav">
      <div class="nav-container container">
        <a href="/" class="brand-logo">
          <img src="/assets/images/placeholders/bad-at-games-logo.png" alt="${config.studioName} Logo">
        </a>
        <ul class="nav-links desktop-nav">
          <li class="dropdown">
            <a href="/#games">GAMES <span class="dropdown-arrow">&#9662;</span></a>
            <ul class="dropdown-menu">
              ${gameLinks}
            </ul>
          </li>
          ${navLinks}
          <li class="social-links">
            <a href="${config.socialLinks.discord}" target="_blank" rel="noopener noreferrer">Discord</a>
            <a href="${config.socialLinks.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="${config.socialLinks.youtube}" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="${config.socialLinks.x}" target="_blank" rel="noopener noreferrer">X</a>
          </li>
        </ul>
        <button class="hamburger-menu" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-links mobile-nav">
            <li class="mobile-dropdown">
                <a href="/#games">GAMES</a>
                <ul class="mobile-dropdown-menu">
                    ${gameLinks}
                </ul>
            </li>
            ${navLinks}
            <li class="social-links">
                <a href="${config.socialLinks.discord}" target="_blank" rel="noopener noreferrer">Discord</a>
                <a href="${config.socialLinks.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="${config.socialLinks.youtube}" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="${config.socialLinks.x}" target="_blank" rel="noopener noreferrer">X</a>
            </li>
        </ul>
      </div>
    </nav>
  `;
};

// Basic JS for hamburger menu interactivity
export const initSiteNav = () => {
  const hamburger = document.querySelector('.hamburger-menu');
  const mobileNav = document.querySelector('.mobile-nav');

  hamburger?.addEventListener('click', () => {
    mobileNav?.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Handle mobile dropdowns
  const mobileDropdownToggle = document.querySelector('.mobile-dropdown > a');
  const mobileDropdownMenu = document.querySelector('.mobile-dropdown-menu');
  mobileDropdownToggle?.addEventListener('click', (e) => {
    e.preventDefault();
    mobileDropdownMenu?.classList.toggle('active');
  });
};
