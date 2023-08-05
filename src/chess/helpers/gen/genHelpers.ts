export const isNumeric = (text: string): boolean => {
  return Number(text) === Number(parseFloat(text));
};

export const indexToFileRank = (index: number) => {
  const file = (index % 8) + 1;
  const rank = 8 - (Math.floor(index / 8));
  return [file, rank];
};