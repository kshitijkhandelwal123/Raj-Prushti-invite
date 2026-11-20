/* =====================================================================
   PRUSHTI & RAJJ · KRISHNA–RUKMINI DWARKA INVITATION
   EDIT ONLY THIS FILE. Keep the "quotes" and the commas.
   Pictures live in the images folder.
   ===================================================================== */
window.WEDDING = {

  /* ---- couple (brideFirst: true shows the bride's name first everywhere) ---- */
  brideFirst: true,
  bride: "Prushti",
  groom: "Rajj",
  brideFull: "Prushti Dave",
  groomFull: "Rajj Thaker",
  monogram: "P & R",
  brideParents: "Smt. Neha Dave\n&\nShri Jignesh Vinodrai Dave",
  brideLabel: "D/o",
  groomParents: "Smt. Sangeeta Thaker\n&\nShri Vinod Mahasukhbhai Thaker",
  groomLabel: "S/o",

  /* ---- opening (3-2-1 countdown at the Dwarkadhish gate) ---- */
  gateEyebrow: "Jai Shri Krishna",
  gateText: "Tap the crest — and count down with us",
  countFrom: 3,
  gateReveal: "Welcome to Dwarka",
  gateImage: "images/temple-dwarka.jpg",

  /* ---- words ---- */
  heroEyebrow: "॥ श्री कृष्णाय नमः ॥",
  place: "Hawthorn Suites by Wyndham · Dwarka",
  heroDate: "1st – 2nd Feb 2027",           /* date line at the top and the end */
  blessing: "॥ श्री गणेशाय नमः ॥",
  tagline: "",
  inviteLine: "With the blessings of our elders, and the love of our families, we cordially invite you to celebrate the wedding of our beloved daughter",
  cardFooter: "Monday & Tuesday\n1st – 2nd February 2027\nHawthorn Suites by Wyndham, Dwarka",

  /* ---- pictures ---- */
  heroImage: "images/kr-hero.jpg",
  heroFocus: "50% 50%",
  footerImage: "images/resort-lounge.jpg",   /* picture at the very end */
  couplePhoto: "",
  venueImage: "images/resort-pool.jpg",
  venueFocus: "50% 60%",

  /* resort postcards (like the Dubai one) */
  postcardEyebrow: "Greetings from Dwarka",
  postcardTitle: "Your Home for the Celebrations",
  postcardNote: "Hawthorn Suites by Wyndham — where the sea breeze meets golden evenings",
  postcards: [
    { src: "images/resort-front.jpg",  cap: "A royal welcome" },
    { src: "images/resort-lounge.jpg", cap: "Golden-hour lounges" },
    { src: "images/resort-night.jpg",  cap: "Starlit poolside nights" }
  ],

  /* gallery – Dwarka, the city of Shri Krishna */
  gallery: [                         /* the couple's photos */
    { src: "images/us-5.jpg", cap: "My safe place" },
    { src: "images/us-3.jpg", cap: "Sailing into forever" },
    { src: "images/us-2.jpg", cap: "Lost in the hills" },
    { src: "images/us-4.jpg", cap: "All smiles, always" },
    { src: "images/us-1.jpg", cap: "Forehead to forehead" }
  ],
  instagram: "https://www.instagram.com/prushkarajj/",   /* couple's Instagram, shown under the gallery ("" = hide) */
  instagramHandle: "@prushkarajj",

  /* ---- date (the three scratch cards reveal this) ---- */
  weddingDateTime: "2027-02-02T17:00:00+05:30",   /* Baraat time – the countdown counts to this */
  dateDay: "02", dateMonth: "FEB", dateYear: "2027",
  sealText: "Scratch each card, one by one, to reveal the date",
  dateNote: "The Baraat arrives at 5 in the evening",
  rememberReveal: false,

  /* ---- events (time: "" hides the time) ---- */
  eventsEyebrow: "Two days of devotion, colour & celebration",
  events: [
    { name: "Day One · Monday",  title: "Carnival",      date: "1st February 2027", time: "12:00 PM onwards",venue: "Hawthorn Suites, Dwarka", note: "Games, music, treats & joyful madness to begin the celebrations", image: "images/ev-haldi.jpg",     focus: "50% 35%" },
    { name: "Day One · Monday",  title: "Garba Night",   date: "1st February 2027", time: "8:00 PM onwards", venue: "Hawthorn Suites, Dwarka", note: "Twirl in mirror-work colours to the beat of the dhol", image: "images/look-garba.jpg",  focus: "50% 45%" },
    { name: "Day Two · Tuesday", title: "Mandava",       date: "2nd February 2027", time: "8:30 AM",        venue: "Hawthorn Suites, Dwarka", note: "Sacred rituals to bless a beautiful beginning",                   image: "images/ev-mandap.jpg",   focus: "30% 40%" },
    { name: "Day Two · Tuesday", title: "Baraat / Jaan", date: "2nd February 2027", time: "5:00 PM onwards", venue: "Hawthorn Suites, Dwarka", note: "The groom arrives with dhol, dance & royal grandeur",             image: "images/ev-baraat.jpg",   focus: "40% 45%" }
  ],

  /* ---- venue ---- */
  venueNote: "By the shores of the Arabian Sea, in the holy city of Shri Krishna — we would be honoured to celebrate with you here.",
  venueCity: "We can't wait to welcome you",
  venueName: "Hawthorn Suites by Wyndham",
  venueAddress: "Dwarka, Gujarat",
  mapLink: "https://share.google/MHLC9bGE6R2PJRKIN",

  /* ---- wardrobe planner ---- */
  dressEyebrow: "Dress for the moment",
  dressTitle: "Wardrobe Planner",
  dressCode: [
    { event: "Carnival",      look: "Fun & fabulous|Bright pastels, playful Indo-western glam", colors: ["#f2a3ae", "#7cc095", "#e9b44c", "#2c6fb0"], image: "images/look-sangeet.jpg" },
    { event: "Garba Night",   look: "Navratri colours|Mirror-work chaniya choli & traditional kurta",      colors: ["#e8608a", "#38a89c", "#f6ae52", "#3d7fc0"], image: "images/look-garba.jpg" },
    { event: "Mandava",       look: "Sunshine yellow|Pastel florals in yellow & peach",          colors: ["#f6dc7a", "#f7c6b4", "#f2b9c4", "#fbf3e0"], image: "images/look-haldi.jpg" },
    { event: "Baraat / Jaan", look: "Royal traditional|Rich jewel tones, ivory & gold",          colors: ["#c43d5e", "#f6ecd8", "#d9a630", "#1f7a6e"], image: "images/look-wedding.jpg" }
  ],

  /* ---- closing ---- */
  rsvpEmail: "",
  rsvpBy: "",
  closing: "Your presence and blessings will make our celebration complete.",
  families: "With love — The Dave & Thaker Families",
  hashtag: "#PRuSHkaRAjJ",
  music: "music/song.mp3",

  /* ---- colours (hex) ---- */
  theme: { ink: "#1d5a55", blue: "#2a7a72", sky: "#d6e8dc", mist: "#f4f9f3", gold: "#b88a2e" },

  hideSections: ["rsvp", "postcard"]
};
