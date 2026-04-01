export type MosaicTile = {
  id: string;
  title: string;
  micro: string;
  body: string;
  image: string;
  accent?: string;
};

export const mosaicTiles: MosaicTile[] = [
  {
    id: "heritage",
    title: "Heritage",
    micro: "Vietnamese roots, American hustle, love on every plate.",
    image: "/images/mosaic-heritage.png",
    body: `My parents and grandparents came to the U.S. from Vietnam, shaped by war, resilience, and a stubborn hope for something better. They found each other in California and built a life from scratch. My mom ran a nail salon, pouring long hours into the business so my brother and I never had to worry. I grew up on pho, spring rolls, and the unspoken rule that hard work is how you show love. That ethic is baked into everything I do. Whether it is debugging at 2 a.m. or showing up early to help a teammate, the instinct comes from watching my family give everything they had without complaint.`,
  },
  {
    id: "missouri",
    title: "Summers in Missouri",
    micro: "Farmland, fireworks, and chocolate cake.",
    image: "/images/mosaic-missouri.png",
    body: `I was born in Missouri, and every summer I went back to spend time on my godfather's farmland. Mornings meant fishing by the pond, afternoons meant helping at the cookout while the grill smoked, and evenings meant 4th of July fireworks from PJ Fireworks lighting up the whole sky. My godmother and I would bake chocolate cakes together, and afterward the whole family would pile onto the couch for Lord of the Rings or Harry Potter marathons. Those summers taught me patience, gratitude, and the value of slowing down. It is a different kind of education than a classroom, and it sharpened my love for practical, hands-on problem solving.`,
  },
  {
    id: "friends",
    title: "Friends Across Cultures",
    micro: "From quinces to conchas, community shaped me.",
    image: "/images/mosaic-friends.png",
    body: `I spent most of my life in North Carolina, surrounded by Hispanic, white, and other cultures that broadened how I see the world. My high school was majority Hispanic, and some of my closest friendships formed at quinces, birthday cookouts, and late-night runs to my friend's dad's bakery for fresh conchas. I learned to celebrate loudly, argue fairly, and welcome people in. Those friendships taught me that trust is built by showing up consistently and being genuinely curious about someone else's story. I want every team I join to feel like that: high trust, clear communication, and room to be human.`,
  },
  {
    id: "dreams",
    title: "Dreams and Pursuit",
    micro: "Choosing Georgia Tech and chasing what matters.",
    image: "/images/mosaic-dreams.png",
    body: `Choosing Georgia Tech was one of the best decisions I have made. Engineering clicked for me in a way nothing else had. I love the puzzle of it: breaking a problem into pieces, building something that works, and understanding why it works. Every semester pushes me further, and I have learned to love the discomfort of not knowing something yet. I am here to become the kind of engineer who builds tools people trust, who communicates clearly, and who never stops learning. The goal is not just a degree; it is the discipline, the friendships, and the confidence that come from doing hard things on purpose.`,
  },
];
