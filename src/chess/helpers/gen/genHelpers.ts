export const isNumeric = (text: string): boolean => {
  return Number(text) === Number(parseFloat(text));
};

export const indexToFileRank = (index: number): number[] => {
  const file = (index % 8) + 1;
  const rank = 8 - (Math.floor(index / 8));
  return [file, rank];
};

export const fileRankToIndex = (file: number, rank: number) => {
  return ((8 - (rank - 1) - 1) * 8) + (file - 1);
};

export const squareToIndex = (square: string): number => {
  const [fileChar, rankString] = square.split("");
  const file = fileChar.toLowerCase().charCodeAt(0) - 96;
  const rank = Number(rankString);
  return fileRankToIndex(file, rank);
};

export const indexToSquare = (index: number): string => {
  const [file, rank] = indexToFileRank(index);
  const fileChar = String.fromCharCode(file + 96);
  const indexString = String(rank);
  return fileChar + indexString;
};