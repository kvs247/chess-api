import { fenToPieceArray } from "../../helpers/fen/fenHelpers";

export const getPieceColor = (piece: string): string => {
  return piece.toUpperCase() === piece ? "w" : "b";
};

export const isFileRankOnBoard = (
  file: number,
  rank: number
): boolean => {
  if (
    (1 <= file && file <= 8) &&
    (1 <= rank && rank <= 8)
  ) {
    return true
  }
  return false;
};

export const isMoveTargetingFriendly = (
  fen: string,
  fromIndex: number,
  toIndex: number,
): boolean => {
  const pieceArray = fenToPieceArray(fen);

  const currentPiece = pieceArray[fromIndex];
  if (currentPiece === null) return false;
  const currentColor = getPieceColor(currentPiece);

  const targetPiece = pieceArray[toIndex];
  if (targetPiece === null) return false;
  const targetColor = getPieceColor(targetPiece);

  if (currentColor === targetColor) return true;

  return false;
};
