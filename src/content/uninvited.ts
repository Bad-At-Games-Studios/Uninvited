/**
 * UNINVITED — single source of truth for all editable page content.
 * Swap any text, image import, or video URL here; the page picks it up.
 */
import heroImage from "@/assets/hero.jpg";
import card1 from "@/assets/card-1.jpg";
import card2 from "@/assets/card-2.jpg";
import card3 from "@/assets/card-3.jpg";
import chapterImage from "@/assets/chapter.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export const content = {
  brand: {
    title: "UNINVITED",
    studio: "Hollow Lamp Studio",
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
    kicker: "A puzzle adventure",
    tagline:
      "You were never invited in. Every house you enter remembers what happened there — and expects you to figure it out before the lights come back on.",
    primaryCta: { label: "Watch the trailer", href: "#trailer" },
    secondaryCta: { label: "See the gameplay", href: "#gameplay" },
    image: heroImage,
    imageAlt: "A hooded figure standing in a dim, lamp-lit apartment hallway",
  },

  about: {
    heading: "What is Uninvited",
    lead:
      "Uninvited is a slow-burn breaking-and-entering mystery. You pick the lock, you read the room, and you leave with the truth — or with nothing at all.",
    body: [
      "Every level is a single home, built as a closed puzzle box. Doors, drawers, letters and the way a family arranges its furniture are all evidence. Nothing is labelled for you; the house explains itself only if you look properly.",
      "There is no combat and no quest marker. There is a torch, a notebook, a limited amount of night, and the sound of someone else moving one floor below you.",
    ],
    cards: [
      {
        title: "Read the room",
        copy:
          "Photographs, receipts and half-finished letters build a case file you assemble yourself.",
        image: card1,
        alt: "A detective desk lit by a warm lamp, covered in photographs and a magnifying glass",
      },
      {
        title: "Get inside",
        copy:
          "Locks, latches and window catches are physical puzzles, each with more than one honest solution.",
        image: card2,
        alt: "A gloved hand working a lock on an old wooden door at night",
      },
      {
        title: "Don't be found",
        copy:
          "Someone is home. Light, sound and your own footprints decide whether the night ends quietly.",
        image: card3,
        alt: "A silhouetted figure seen through a doorway from a dark hiding place",
      },
    ],
  },

  gameplay: {
    heading: "How a night plays out",
    lead: "Four beats, repeated in every house, never the same twice.",
    steps: [
      {
        number: "01",
        title: "Case the house",
        copy:
          "Circle the building from the street. Count windows, note the lit rooms, find the way in nobody thought about.",
      },
      {
        number: "02",
        title: "Break the lock",
        copy:
          "Tools are limited and loud. Choose between the fast entry and the one that leaves no trace.",
      },
      {
        number: "03",
        title: "Collect the truth",
        copy:
          "Pin evidence to your board. Contradictions surface on their own once enough of it is on the wall.",
      },
      {
        number: "04",
        title: "Leave clean",
        copy:
          "Put everything back. What you disturb carries into the next chapter, and someone will notice.",
      },
    ],
  },

  story: {
    kicker: "Chapter 01",
    heading: "The Jimmy's Parable",
    copy: [
      "A terrace house on Kellan Row, empty for nine years, with the electricity bill still paid on time. The neighbours call it the Jimmy house and change the subject.",
      "Chapter 01 asks one small question — who keeps the lights on — and answers it with a boy's bedroom that was never packed away, a locked door on the landing, and a tape recorder that only plays when the hallway is dark.",
    ],
    facts: [
      { label: "Runtime", value: "≈ 45 minutes" },
      { label: "Rooms", value: "11 explorable" },
      { label: "Endings", value: "3" },
    ],
    image: chapterImage,
    imageAlt: "A small boy silhouetted at the end of a dim corridor lit by warm light",
  },

  trailer: {
    heading: "The reveal trailer",
    copy: "90 seconds of lockpicks, lamplight and very bad decisions.",
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
    ],
  },

  info: {
    heading: "Game info",
    rows: [
      { label: "Title", value: "Uninvited" },
      { label: "Genre", value: "First-person puzzle adventure / stealth mystery" },
      { label: "Developer", value: "Hollow Lamp Studio" },
      { label: "Engine", value: "Unreal Engine 5" },
      { label: "Platforms", value: "PC (Windows), Steam Deck verified pending" },
      { label: "Players", value: "Single player" },
      { label: "Status", value: "Chapter 01 vertical slice — IGDC 2026 submission" },
      { label: "Release", value: "TBA" },
    ],
  },

  footer: {
    line: "Uninvited is an independent game made by four people and one very patient cat.",
    links: [
      { label: "Press kit", href: "#info" },
      { label: "Contact", href: "mailto:hello@example.com" },
      { label: "Steam", href: "#" },
      { label: "Discord", href: "#" },
    ],
    copyright: "© 2026 Hollow Lamp Studio. All rights reserved.",
  },
};
