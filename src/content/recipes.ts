export type Recipe = {
  id: string;
  title: string;
  note: string;
  image?: string;
  url?: string;
  tags: string[];
};

export const recipes: Recipe[] = [
  {
    id: "brownies",
    title: "Hershey's Chocolate Brownies",
    note: "Rich, fudgy brownies topped with broken Hershey's bar pieces. Best served warm.",
    image: "/images/baking/brownies.jpg",
    tags: ["brownies", "chocolate"],
  },
  {
    id: "strawberry-cake",
    title: "Strawberry Shortcake",
    note: "Layers of vanilla cake, fresh strawberries, and whipped cream. Messy but worth it.",
    image: "/images/baking/strawberry-cake.jpg",
    tags: ["cake", "fruit"],
  },
  {
    id: "oatmeal-cookies",
    title: "Iced Oatmeal Cookies",
    note: "Soft oatmeal cookies with a simple powdered sugar glaze drizzled on top.",
    image: "/images/baking/oatmeal-cookies.jpg",
    tags: ["cookies", "oatmeal"],
  },
  {
    id: "cinnamon-rolls",
    title: "Homemade Cinnamon Rolls",
    note: "Soft, pillowy rolls with cinnamon-sugar filling and cream cheese frosting.",
    image: "/images/baking/cinnamon-rolls.jpg",
    tags: ["bread", "cinnamon"],
  },
  {
    id: "chocolate-chip",
    title: "Chocolate Chip Cookies",
    note: "The classic. Crispy edges, chewy center, plenty of chocolate chips.",
    image: "/images/baking/chocolate-chip-cookies.jpg",
    tags: ["cookies", "chocolate"],
  },
];
