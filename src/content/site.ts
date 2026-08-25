
export interface SiteConfig {
  studioName: string;
  tagline: string;
  description: string;
  aboutText: string;
  contactEmail: string;
  socialLinks: {
    discord: string;
    instagram: string;
    youtube: string;
    x: string;
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    defaultOgImage: string;
  };
  navigation: { name: string; href: string; }[];
}

export const siteConfig: SiteConfig = {
  studioName: "Bad At Games",
  tagline: "WE MAKE GAMES. SOME GOOD. SOME BAD. MOSTLY BOTH.",
  description: "Bad At Games is an independent game studio making small, weird, ambitious games.",
  aboutText: "Bad At Games is an independent game studio focused on creating original games across different genres and platforms. We like experimenting with ideas, building things ourselves, and making games that are a little different.",
  contactEmail: "hello@badatgames.com",
  socialLinks: {
    discord: "#", // Placeholder
    instagram: "#", // Placeholder
    youtube: "#", // Placeholder
    x: "#", // Placeholder
  },
  seo: {
    defaultTitle: "Bad At Games — Independent Game Studio",
    defaultDescription: "Bad At Games is an independent game studio making original games across different genres and platforms.",
    defaultOgImage: "/assets/images/placeholders/bad-at-games-og.png", // Placeholder
  },
  navigation: [
    { name: "GAMES", href: "/#games" },
    { name: "ABOUT", href: "/#about" },
    { name: "CONTACT", href: `mailto:hello@badatgames.com` },
  ]
};
