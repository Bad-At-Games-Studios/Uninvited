export const CTAButton = (text: string, href: string, primary: boolean = true, target: string = '_self') => {
  return `<a href="${href}" class="cta-button ${primary ? 'primary' : 'secondary'}" target="${target}" rel="noopener noreferrer">${text}</a>`;
};
