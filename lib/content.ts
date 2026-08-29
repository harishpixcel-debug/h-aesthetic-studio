// Centralized structured content — separated from presentation.
// Populate real values here as they become available; components
// read from this file rather than hard-coding copy.

export const studio = {
  eyebrow: "Interior Design · Studio",
  tagline: "Spaces designed with intention.",
  positioningHeadline: "Design that begins with understanding.",
  positioningHeadlineLead: "Design that begins",
  positioningHeadlineEmphasis: "understanding.",
  positioningCopy:
    "Every space has its own character, constraints and possibilities. We begin by understanding them — then build a design around what matters.",
};

export const contact = {
  phone: "+91 85018-78948",
  phoneHref: "tel:+918501878948",
  email: null as string | null, // "coming soon" until supplied
  instagram: null as string | null,
  behance: null as string | null,
};

export const navLinks = [
  { label: "Studio", href: "/studio" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export const expertiseAreas = [
  {
    index: "S.01",
    name: "Space Planning",
    description:
      "Circulation, back-of-house and service flow resolved before anything is styled.",
  },
  {
    index: "S.02",
    name: "Hotels",
    description:
      "Lobbies, rooms and public areas planned for arrival, calm and operational ease.",
  },
  {
    index: "S.03",
    name: "Cafés",
    description:
      "Counter-led layouts that keep queues, seating and service moving comfortably.",
  },
  {
    index: "S.04",
    name: "Restaurants",
    description:
      "Cover counts, kitchen adjacency and acoustics balanced with a distinct dining mood.",
  },
  {
    index: "S.05",
    name: "Co-working Offices",
    description:
      "Focus, meeting and social zones planned around real density and daily use.",
  },
];

export const processSteps = [
  { num: "01", name: "Discover", idea: "Understand before designing." },
  { num: "02", name: "Define", idea: "Give the brief a shape." },
  { num: "03", name: "Design", idea: "Decide what belongs." },
  { num: "04", name: "Develop", idea: "Resolve every detail." },
  { num: "05", name: "Deliver", idea: "Bring the drawing into the room." },
  { num: "06", name: "Experience", idea: "Live in the space." },
];

export const philosophyStatement =
  "Good design isn't about adding more. It's about knowing what belongs.";

export const philosophyVocab = ["Space", "Light", "Material", "Detail"];
