export type Recipe = {
  id: string;
  title: string;
  note: string;
  url?: string;
  tags: string[];
};

export const recipes: Recipe[] = [
  {
    id: "r1",
    title: "Sourdough focaccia (weekend bake)",
    note: "Replace with your own story once you paste links. I keep a wet dough and fold twice before the overnight cold proof.",
    url: "https://example.com/recipe-placeholder",
    tags: ["bread", "sourdough"],
  },
  {
    id: "r2",
    title: "Vietnamese coffee chiffon (experiment)",
    note: "A sweet nod to home flavors; swap in your real recipe URL and a photo of your slice.",
    tags: ["cake", "coffee"],
  },
  {
    id: "r3",
    title: "Brown butter chocolate chip cookies",
    note: "My reliable crowd pleaserâ€”chill the dough if you want thicker cookies.",
    tags: ["cookies", "baking"],
  },
];
