export interface Reason {
  id: number;
  text: string;
}

export const reasons: Reason[] = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  text: `Reason ${index + 1}`,
}));