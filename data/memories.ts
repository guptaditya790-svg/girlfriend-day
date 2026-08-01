export interface Memory {
  id: number;
  title: string;
  date: string;
  description: string;
}

export const memories: Memory[] = [
  {
    id: 1,
    title: "We met",
    date: "Day 1",
    description: "Every beautiful story has a beginning.",
  },
  {
    id: 2,
    title: "We talked",
    date: "Day 5",
    description: "Every conversation made us closer.",
  },
  {
    id: 3,
    title: "We laughed",
    date: "Day 15",
    description: "The smiles slowly became unforgettable.",
  },
  {
    id: 4,
    title: "Best Friends",
    date: "Day 40",
    description: "Some friendships are meant to become forever.",
  },
  {
    id: 5,
    title: "We fell in love",
    date: "Forever",
    description: "The best chapter of our story.",
  },
];