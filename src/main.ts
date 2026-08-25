
import { siteConfig, games } from './content/index';
import { renderHomePage } from './pages/home';
import { renderGamePage } from './pages/game';

// This is a very basic client-side router.
// In a real Vite/React/Vue/Svelte project, a dedicated router would handle this.
const renderApp = () => {
  const path = window.location.pathname;
  const appRoot = document.getElementById('app');

  if (!appRoot) {
    console.error("App root element not found!");
    return;
  }

  // Clear existing content
  appRoot.innerHTML = '';

  if (path === '/' || path === '/index.html') {
    renderHomePage(appRoot, siteConfig, games);
  } else if (path.startsWith('/games/')) {
    const slug = path.split('/').pop()?.replace('.html', '');
    const game = games.find(g => g.slug === slug);
    if (game) {
      renderGamePage(appRoot, game, siteConfig, games);
    } else {
      appRoot.innerHTML = `<h1>404 - Game Not Found</h1><p>The game you are looking for does not exist.</p><p><a href="/">Go to Home</a></p>`;
    }
  } else {
    appRoot.innerHTML = `<h1>404 - Page Not Found</h1><p>The page you are looking for does not exist.</p><p><a href="/">Go to Home</a></p>`;
  }
};

// Initial render
document.addEventListener('DOMContentLoaded', renderApp);

// Handle navigation for SPA-like behavior (optional, can be fully reloaded pages)
window.addEventListener('popstate', renderApp);

// Simple link interception for SPA navigation
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target.matches('a[href^="/"]:not([href^="//"]) ')) { // Internal links
    const href = target.getAttribute('href');
    if (href && !href.startsWith('/assets') && !href.startsWith('/src')) { // Exclude asset links
      e.preventDefault();
      window.history.pushState(null, '', href);
      renderApp();
    }
  }
});
