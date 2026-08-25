/**
 * UNINVITED — single source of truth for all editable page content.
 * Swap any text, image import, or video URL here; the page picks it up.
 */
const heroImage = "/images/games/uninvited/hero.jpg";
const card1 = "/images/games/uninvited/card-1.jpg";
const card2 = "/images/games/uninvited/card-2.jpg";
const card3 = "/images/games/uninvited/card-3.jpg";
const chapterImage = "/images/games/uninvited/chapter.jpg";
const gallery1 = "/images/games/uninvited/gallery-1.jpg";
const gallery2 = "/images/games/uninvited/gallery-2.jpg";
const gallery3 = "/images/games/uninvited/gallery-3.jpg";

export const content = {
  brand: {
    title: "UNINVITED",
    studio: "Bad At Games",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Gameplay", href: "#gameplay" },
    { label: "Story", href: "#story" },
    { label: "Trailer", href: "#trailer" },
    { label: "Gallery", href: "#gallery" },
    { label: "Info", href: "#info" },
  ],

  hero: {
    kicker: "BREAK IN. SOLVE. ESCAPE.",
    tagline: "Every house tells a different story.",
    primaryCta: { label: "WATCH TRAILER", href: "#trailer" },
    secondaryCta: { label: "EXPLORE GAME", href: "#gameplay" },
    image: heroImage,
    imageAlt: "A hooded figure standing in a dim, lamp-lit apartment hallway",
  },

  about: {
    heading: "ABOUT",
    lead: "Uninvited is a puzzle-adventure game where you play as a thief, exploring strange places, solving puzzles, uncovering stories, and finding a way out.",
    body: [
      "An upcoming puzzle-adventure game where you play as a thief, exploring mysterious locations, solving puzzles, uncovering stories, and escaping.",
      "Every level is a single location, built as a closed puzzle box. Doors, drawers, letters and the way a space is arranged are all evidence.",
    ],
    cards: [
      {
        title: "Read the room",
        copy: "Photographs, receipts and half-finished letters build a case file you assemble yourself.",
        image: card1,
        alt: "A detective desk lit by a warm lamp, covered in photographs and a magnifying glass",
      },
      {
        title: "Get inside",
        copy: "Locks, latches and window catches are physical puzzles, each with more than one honest solution.",
        image: card2,
        alt: "A gloved hand working a lock on an old wooden door at night",
      },
      {
        title: "Don't be found",
        copy: "Someone is home. Light, sound and your own footprints decide whether the night ends quietly.",
        image: card3,
        alt: "A silhouetted figure seen through a doorway from a dark hiding place",
      },
    ],
  },

  gameplay: {
    heading: "GAMEPLAY",
    lead: "Explore mysterious locations, solve puzzles, uncover stories, and escape.",
    steps: [
      {
        number: "EXPLORE",
        title: "Find Clues & Items",
        copy: "Search the environment for useful items and hidden clues that will help you progress.",
      },
      {
        number: "SOLVE",
        title: "Solve Puzzles",
        copy: "Use your wits to solve environmental puzzles and unlock new areas.",
      },
      {
        number: "COMPLETE",
        title: "Complete the Job",
        copy: "Finish your objectives and uncover the story behind each location.",
      },
      {
        number: "ESCAPE",
        title: "Escape",
        copy: "Get out before you're caught. Each escape is a challenge in itself.",
      },
    ],
  },

  story: {
    kicker: "CHAPTERS",
    heading: "EVERY JOB. A NEW STORY.",
    copy: [
      "Uninvited will feature different chapters with different locations, puzzles, and stories.",
      "Each chapter takes you to a new location with its own mysteries to solve and stories to uncover.",
    ],
    facts: [
      { label: "Format", value: "Episodic Chapters" },
      { label: "Locations", value: "Multiple Unique Settings" },
      { label: "Stories", value: "Standalone Narratives" },
    ],
    image: chapterImage,
    imageAlt: "A small boy silhouetted at the end of a dim corridor lit by warm light",
  },

  trailer: {
    heading: "TRAILER",
    copy: "Watch the trailer for Uninvited.",
    // Swap this for your own embed URL (YouTube, Vimeo, or a direct .mp4 in a <video>).
    embedUrl: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ",
    embedTitle: "Uninvited — reveal trailer",
    poster: heroImage,
  },

  gallery: {
    heading: "From the night shift",
    images: [
      { src: gallery1, alt: "Rain-soaked city street at night seen from an apartment window" },
      { src: gallery2, alt: "An open safe holding old letters and a pocket watch" },
      { src: card1, alt: "Evidence photographs spread under a desk lamp" },
      { src: gallery3, alt: "Photographs pinned across a wall under a single bulb" },
      { src: card3, alt: "A figure glimpsed through a doorway from the dark" },
      { src: card2, alt: "A gloved hand working a lock on an old wooden door at night" },
    ],
  },

  info: {
    heading: "GAME INFO",
    rows: [
      { label: "Title", value: "Uninvited" },
      { label: "Genre", value: "Puzzle / Adventure / Point-and-Click" },
      { label: "Developer", value: "Bad At Games" },
      { label: "Engine", value: "Unreal Engine 5" },
      { label: "Platforms", value: "PC" },
      { label: "Players", value: "Single player" },
      { label: "Status", value: "In Development" },
      { label: "Release", value: "Coming Soon" },
    ],
  },

  footer: {
    line: "Uninvited is an independent game from Bad At Games.",
    links: [
      { label: "Press kit", href: "#info" },
      { label: "Contact", href: "mailto:hello@badatgames.com" },
      { label: "Discord", href: "https://discord.gg/8QFn72B7Am" },
    ],
    copyright: "© 2026 Bad At Games. All rights reserved.",
  },
};
