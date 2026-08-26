/**
 * BAD AT GAMES — Studio-wide configuration
 * Single source of truth for site-wide content, navigation, and SEO
 */

export const siteConfig = {
  siteName: "Bad At Games",
  tagline: "Independent Game Studio",
  description:
    "Bad At Games is an independent game studio making original games across genres and platforms. We like experimenting with ideas, building things ourselves, and making games that are a little different.",
  email: "badatgamesstudio@gmail.com",
  socials: {
    discord: "https://discord.gg/8QFn72B7Am",
    instagram: "https://www.instagram.com/badatgameshq?igsi=MXNvaG12a2JmZWc0ZQ==",
    youtube: "https://www.youtube.com/channel/UCcmOec951iDGZZKyNk_7hIA",
    facebook: "https://www.facebook.com/share/r/183Eg21Nso/",
    x: "#", // Placeholder
  },
  seo: {
    title: "Bad At Games — Independent Game Studio",
    description:
      "Bad At Games is an independent game studio making original games across different genres and platforms.",
  },
  footer: {
    copyright: "© 2026 Bad At Games. All rights reserved.",
  },
};

export const navigation = [
  { label: "Games", href: "/#games" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const gamesNavigation = [
  { label: "Stay Ahead", href: "/stayahead" },
  { label: "Uninvited", href: "/uninvited" },
  { label: "Not Compatible", href: "/notcompatible" },
  { label: "Supermarket Showdown", href: "/supermarketshowdown" },
];
