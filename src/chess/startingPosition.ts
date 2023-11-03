export const startingFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

export const startingPieceArray = [
  "r", "n", "b", "q", "k", "b", "n", "r",
  Array(8).fill("p"),
  Array(32).fill(null),
  Array(8).fill("P"),
  "R", "N", "B", "Q", "K", "B", "N", "R",
].flat();