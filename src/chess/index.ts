import { indexToSquare, squareToIndex } from "./helpers/gen/genHelpers";
import { fenToPieceArray, parseFen, pieceArrayToFen } from "./helpers/fen/fenHelpers";
import { getPieceColor } from "./pieces/helpers/helpers";
import { PieceArray } from "./types";

import pawnCanMove from "./pieces/pawn/pawn";
import knightCanMove from "./pieces/knight/knight";
import bishopCanMove from "./pieces/bishop/bishop";
import rookCanMove from "./pieces/rook/rook";
import queenCanMove from "./pieces/queen/queen";

const getFenFromMove = (
  fen: string,
  fromIndex: number,
  toIndex: number,
): string => {
  const pieceArray: PieceArray = fenToPieceArray(fen);
  const piece: string | null = pieceArray[fromIndex];

  if (piece === null) return fen;

  switch (piece.toLowerCase()) {
    case "p":
      if (!pawnCanMove(fen, fromIndex, toIndex)) return fen;
      break;
    case "n":
      if (!knightCanMove(fen, fromIndex, toIndex)) return fen;
      break;
    case "b":
      if (!bishopCanMove(fen, fromIndex, toIndex)) return fen;
      break;
    case "r":
      if (!rookCanMove(fen, fromIndex, toIndex)) return fen;
      break;
    case "q":
      if (!queenCanMove(fen, fromIndex, toIndex)) return fen;
  }

  const pieceColor = getPieceColor(piece);
  const newPieceColor = pieceColor === "w" ? "b" : "w";
  
  let enPassantTarget = "-";
  if (piece.toLowerCase() === "p" && Math.abs(fromIndex - toIndex) === 16) {
    const middleIndex = Math.min(fromIndex, toIndex) + 8;
    enPassantTarget = indexToSquare(middleIndex);
  }
  
  const suffix = ` ${newPieceColor} KQkq ${enPassantTarget} 0 1`;
  
  pieceArray[fromIndex] = null;
  pieceArray[toIndex] = piece;
  // en passant
  const parsedFen = parseFen(fen);
  const enPassantSquare = parsedFen.enPassantTarget;
  const enPassantIndex = squareToIndex(enPassantSquare);
  if (toIndex === enPassantIndex) {
    const sign = pieceColor === "w" ? 1 : -1;
    const removeIndex = toIndex + (8 * sign);
    pieceArray[removeIndex] = null;
  }

  const result = pieceArrayToFen(pieceArray, suffix);
  return result;
};

export default getFenFromMove;
