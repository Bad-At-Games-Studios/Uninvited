import { SiteConfig, Game } from '../content/index';
import { SiteNav, initSiteNav } from '../components/SiteNav';
import { Footer } from '../components/Footer';
import { SectionHeading } from '../components/SectionHeading';
import { GameCard } from '../components/GameCard';
import { CTAButton } from '../components/CTAButton';
import { ImageSlot } from '../components/ImageSlot';

export const renderHomePage = (root: HTMLElement, config: SiteConfig, games: Game[]) => {
  root.innerHTML = `
    ${SiteNav(config, games)}
    <main>
      <section class="hero-homepage section">
        <div class="container hero-content">
          <img src="/assets/images/placeholders/bad-at-games-logo.png" alt="Bad At Games Logo" class="studio-logo">
          <h1>${config.tagline}</h1>
          <p class="subtitle">${config.description}</p>
          <div class="hero-ctas">
            ${CTAButton('EXPLORE OUR GAMES', '/#games', true)}
            ${CTAButton('ABOUT BAD AT GAMES', '/#about', false)}
          </div>
        </div>
        <div class="hero-visuals">
            ${ImageSlot('/assets/images/placeholders/stayahead-hero.png', 'Stay Ahead visual', 'hero-visual-left')}
            ${ImageSlot('/assets/images/placeholders/uninvited-card.png', 'Uninvited visual', 'hero-visual-right')}
        </div>
      </section>

      <section id="games" class="our-games section container">
        ${SectionHeading('OUR GAMES')}
        <div class="game-cards-grid">
          ${games.map(game => GameCard(game)).join('')}
        </div>
      </section>

      <section id="about" class="about-studio section container">
        ${SectionHeading('ABOUT BAD AT GAMES')}
        <div class="about-content">
          <div class="about-text">
            <p>${config.aboutText}</p>
          </div>
          <div class="about-visual">
            ${ImageSlot('/assets/images/placeholders/bad-at-games-logo.png', 'Bad At Games Studio Visual', 'studio-visual')}
          </div>
        </div>
      </section>
    </main>
    ${Footer(config, games)}
  `;

  initSiteNav();
};
