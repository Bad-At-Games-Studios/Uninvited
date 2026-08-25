
export interface Game {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  type: string;
  status: string;
  platform: string;
  heroImage: string;
  cardImage: string;
  iconImage?: string;
  screenshots: string[];
  trailerUrl?: string;
  webDemoUrl?: string;
  storeUrl?: string;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
  visualIdentity?: 'dark-cinematic-scrapbook' | 'energetic-arcade' | 'not-compatible-style' | 'coming-soon';
  features?: string[];
  chapters?: { title: string; description: string; }[];
  sections?: { title: string; content: string }[];
}

export const games: Game[] = [
  {
    slug: "stayahead",
    title: "Stay Ahead",
    tagline: "Balance Speed. Survive Chaos.",
    description: "Stay Ahead is a fast-paced endless runner where you flip gravity, dodge deadly obstacles, collect powerful orbs, and compete on the global leaderboard. Okay, so here's the deal. You're running. Forever. Without pause. Without mercy. And you've got exactly two choices, every single time: Comfort Zone — slow down, play it safe, recover your energy. Boring, but you survive. Rage Zone — speed up, chase bigger scores, and watch your energy drain with every mistake. That's it. That's the whole game. Flip between the two worlds, dodge what's coming, grab powerful boost orbs before your energy hits zero, because when it does... GAME OVER. Your run goes straight to the global leaderboard for everyone to see. Stay Ahead is a fast, one-thumb endless runner built on a simple question: Are you a Comfort Zone player or a Rage Zone player? Most people think they know. You know what? Most people are wrong. • Flip gravity between two unique worlds • Online global leaderboards — see exactly where you rank • Collect power-ups & score boost orbs • Fast-paced endless runner gameplay • One-thumb controls • Easy to learn, brutal to master • Quick sessions, play anytime • Free to play Dodge. Decide. Stay Ahead. Flip gravity in this fast endless runner. Climb the global leaderboard.",
    type: "Endless Runner",
    status: "Available on Android",
    platform: "Android",
    heroImage: "/assets/images/placeholders/stayahead-hero.png",
    cardImage: "/assets/images/placeholders/stayahead-card.png",
    iconImage: "/assets/images/placeholders/stayahead-icon.png",
    screenshots: [
      "/assets/images/placeholders/stayahead-screenshot-1.png",
      "/assets/images/placeholders/stayahead-screenshot-2.png",
      "/assets/images/placeholders/stayahead-screenshot-3.png",
    ],
    webDemoUrl: "https://stay-ahead.netlify.app",
    storeUrl: "https://play.google.com/store/apps/details?id=com.badatgames.stayahead",
    seoTitle: "Stay Ahead — Endless Runner | Bad At Games",
    ogImage: "/assets/images/placeholders/stayahead-og.png",
    visualIdentity: 'energetic-arcade',
    features: [
      "Jump obstacles",
      "Flip between zones",
      "Collect power-ups",
      "React to increasing speed",
      "Chase higher scores",
      "Online leaderboards",
    ],
  },
  {
    slug: "uninvited",
    title: "Uninvited",
    tagline: "Break In. Solve. Escape.",
    description: "An upcoming puzzle-adventure game where you play as a thief, exploring mysterious locations, solving puzzles, uncovering stories, and escaping.",
    type: "Puzzle / Adventure / Point-and-Click",
    status: "In Development",
    platform: "PC",
    heroImage: "/assets/images/placeholders/uninvited-hero.png",
    cardImage: "/assets/images/placeholders/uninvited-card.png",
    screenshots: [
      "/assets/images/placeholders/uninvited-screenshot-1.png",
      "/assets/images/placeholders/uninvited-screenshot-2.png",
    ],
    trailerUrl: "#", // Placeholder
    seoTitle: "Uninvited — Puzzle Adventure Game | Bad At Games",
    ogImage: "/assets/images/placeholders/uninvited-og.png",
    visualIdentity: 'dark-cinematic-scrapbook',
    chapters: [
      {
        title: "CHAPTER 01",
        description: "THE JIMMY'S PARABLE - A missing person. A locked room. Piece together the clues and uncover what happened.",
      },
    ],
    sections: [
      {
        title: "WHAT IS UNINVITED?",
        content: "You are a thief. Every job takes you somewhere new, where you'll explore, decode puzzles, uncover clues, and uncover the story behind the place."
      },
      {
        title: "GAMEPLAY",
        content: "EXPLORE FIND CLUES & ITEMS SOLVE PUZZLES COMPLETE THE JOB ESCAPE"
      }
    ]
  },
  {
    slug: "not-compatible",
    title: "Not Compatible",
    tagline: "A minimalist rule-based reaction experiment.",
    description: "Not Compatible is a minimalist rule-based reaction experiment. You're tasked with verifying human responses in a system initialization process.",
    type: "Puzzle / Reaction Experiment",
    status: "Web Demo Available",
    platform: "Web Prototype",
    heroImage: "/assets/images/placeholders/not-compatible-hero.png",
    cardImage: "/assets/images/placeholders/not-compatible-card.png",
    screenshots: [
      "/assets/images/placeholders/not-compatible-screenshot-1.png",
      "/assets/images/placeholders/not-compatible-screenshot-2.png",
    ],
    webDemoUrl: "https://not-compatible.netlify.app/#",
    seoTitle: "Not Compatible — Bad At Games",
    ogImage: "/assets/images/placeholders/not-compatible-og.png",
    visualIdentity: 'not-compatible-style',
  },
  {
    slug: "supermarketshowdown",
    title: "Supermarket Showdown",
    tagline: "Coming Soon",
    description: "This is a future project. More details to be revealed soon!",
    type: "Coming Soon",
    status: "Coming Soon",
    platform: "N/A",
    heroImage: "/assets/images/placeholders/supermarket-showdown-hero.png",
    cardImage: "/assets/images/placeholders/supermarket-showdown-card.png",
    screenshots: [
      "/assets/images/placeholders/supermarket-showdown-placeholder.png",
    ],
    seoTitle: "Supermarket Showdown — Bad At Games",
    ogImage: "/assets/images/placeholders/supermarket-showdown-og.png",
    visualIdentity: 'coming-soon',
  },
];
