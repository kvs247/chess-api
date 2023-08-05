import { fenToPieceArray, pieceArrayToFen } from "./helpers/fen/fenHelpers";
import { PieceArray } from "./types";

import knightCanMove from "./pieces/knight/knight";
import bishopCanMove from "./pieces/bishop/bishop";
import rookCanMove from "./pieces/rook/rook";

const getFenFromMove = (
  fen: string,
  fromIndex: number,
  toIndex: number,
): string => {
  const pieceArray: PieceArray = fenToPieceArray(fen);
  const piece: string | null = pieceArray[fromIndex];

  if (piece === null) return fen;

  switch (piece.toLowerCase()) {
    case "n":
      if (!knightCanMove(fen, fromIndex, toIndex)) return fen;
      break;
    case "b":
      if (!bishopCanMove(fen, fromIndex, toIndex)) return fen;
      break;
    case "r":
      if (!rookCanMove(fen, fromIndex, toIndex)) return fen;
      break;
  }

  pieceArray[fromIndex] = null;
  pieceArray[toIndex] = piece;
  const result = pieceArrayToFen(pieceArray);
  return result;
};

export default getFenFromMove;