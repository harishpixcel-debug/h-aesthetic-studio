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
  phone: "+91 85918-78948",
  phoneHref: "tel:+918591878948",
   email: "hello@h-aestheticstudio.com",
  emailHref: "mailto:hello@h-aestheticstudio.com",
  instagram: "h.aesthetic.studio",
  instagramHref: "https://www.instagram.com/h.aesthetic.studio/",
  behance: null as string | null,
  website: "h-aestheticstudio.com",
};

export const navLinks = [
  { label: "Studio", href: "/studio" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/#process" },
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
  {
    index: "S.06",
    name: "Cinematography",
    description:
      "Once a project is complete, we film the finished space — light, material and atmosphere captured over time. Available as part of the project handover.",
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

export const journalArticles = [
  {
    slug: "space-before-decoration",
    title: "Space Before Decoration",
    category: "Design",
    date: "2026-09-13",
    excerpt:
      "A room can be full of beautiful things and still feel wrong. Usually, the problem isn't what's in it — it's the order things were decided in.",
    content: [
      "A room can be full of beautiful things and still feel wrong. Usually, the problem isn't what's in it — it's the order things were decided in.",
      "Most interiors go wrong at the very first step: someone picks a mood before they understand a plan. A palette gets chosen. A material board gets built. And only then does anyone ask how people will actually move through the space, where the light falls at 4pm, or what happens at the counter during a Saturday rush.",
      "We work in the opposite order.",
      "Before a single material is chosen, we ask what the space needs to do. In a café, that means understanding queue flow before we think about seating. In a workplace, it means knowing how many people actually use a meeting room in a day before we decide how big to make it. In a hotel lobby, it means understanding arrival — where luggage goes, where someone waits, where they're guided next — before we think about what the reception desk looks like.",
      "Decoration is what a space wears. Planning is what a space is. You can change the first without touching the second. You can't do it the other way around.",
      "This is why our process starts with Discover and Define — two stages that produce nothing pretty. No mood boards, no renders. Just a clear picture of how a space needs to function, for the people who'll actually use it every day.",
      "Everything after that — material, light, styling — is in service of that plan, not a replacement for it. A beautiful room that doesn't work will stop feeling beautiful within a week of being used. A well-planned room earns its beauty slowly, through how well it holds up to daily life.",
      "Space, then decoration. Not the other way around.",
    ],
  },
  {
    slug: "why-we-choose-raw-over-refined",
    title: "Why We Choose Raw Over Refined",
    category: "Material",
    date: "2026-09-13",
    excerpt:
      "Walk into most new commercial interiors and you'll notice a certain sameness — glossy laminate, mirrored panels, warm LED strips doing the work architecture should be doing.",
    content: [
      "Walk into most new commercial interiors and you'll notice a certain sameness: glossy laminate, mirrored panels, warm LED strips doing the work that architecture should be doing. It photographs well. It rarely ages well.",
      "We build around a different set of materials — travertine, microtopping, lime plaster, honest timber, tactile steel — and the reason isn't aesthetic preference alone. It's about what happens to a surface over years, not just in the first photograph.",
      "Raw materials show use. A polished laminate surface looks identical on day one and day one thousand, until suddenly it doesn't — a scratch, a chip, a sheen that's gone dull, and the whole surface reads as damaged, because its entire value was in looking untouched. A lime-plastered wall or a honed travertine floor does the opposite: it picks up character. Small marks don't read as flaws, because the material was never pretending to be flawless in the first place.",
      "There's also a simpler reason: raw materials respond to light instead of fighting it. A glossy surface reflects light in one direction — a hard, flat glare. A textured, matte material scatters it, which is why the same room can feel completely different at 9am and at dusk without a single fixture changing. That responsiveness is difficult to manufacture with anything synthetic.",
      "None of this is a rule against every glossy or manufactured material — there are places steel, glass, or lacquer genuinely earn their spot. But our default leans toward materials that were shaped by process rather than printed to imitate one: real stone instead of a stone-look laminate, real plaster instead of a wallpaper mimicking its texture.",
      "The test we come back to: will this surface still look intentional in five years, or will it look like it's asking to be replaced? Raw materials tend to pass that test. Most imitations don't.",
    ],
  },
];

