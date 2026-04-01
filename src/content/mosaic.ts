export type MosaicTile = {
  id: string;
  title: string;
  micro: string;
  body: string;
  accent?: string;
};

export const mosaicTiles: MosaicTile[] = [
  {
    id: "heritage",
    title: "Heritage",
    micro: "Vietnamese and East Asian roots, American upbringing.",
    body: `Food was one of my first languages of care: rice on the table, broth that takes time, and the quiet discipline of feeding people well. I carry that forward as attentivenessâ€”listening closely, noticing who is left out, and making space.`,
  },
  {
    id: "godfamily",
    title: "Godfamily",
    micro: "Black godmother, white godfatherâ€”two poles of love.",
    body: `My godmother and godfather shaped how I understand loyalty and generosity across difference. They showed me that family is not only blood; it is showing up, consistently, with respect.`,
  },
  {
    id: "cookouts",
    title: "Cookouts",
    micro: "Community tables and loud laughter.",
    body: `Some of my favorite memories live at cookouts: music, shared plates, and conversations that wander from jokes to serious dreams. Those gatherings taught me rhythm, hospitality, and how to be a good guest and a good host.`,
  },
  {
    id: "missouri",
    title: "Missouri farmland",
    micro: "Fishing trips and wide skies with my godfather.",
    body: `Time on the farm slowed me down enough to notice weather, patience, and the small rituals of outdoor work. It is a different education than a classroomâ€”and it sharpened my appreciation for practical problem solving.`,
  },
  {
    id: "friends",
    title: "Friends across cultures",
    micro: "My brother's Latino fraternity; friendships that expanded my world.",
    body: `I grew up around people who celebrated loudly, argued fairly, and welcomed newcomers. I want the teams I join to feel like that: high trust, clear communication, and room to be human.`,
  },
  {
    id: "dreams",
    title: "Dreams",
    micro: "Build tools people trust; tell honest stories about how they work.",
    body: `Long term, I want to work on systems that bridge hardware and software with integrityâ€”where safety, accessibility, and maintainability are not afterthoughts. Short term, I am focused on rigorous coursework, hands-on projects, and leadership habits that earn a team confidence.`,
  },
];
