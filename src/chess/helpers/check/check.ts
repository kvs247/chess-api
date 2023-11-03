import { fileRankToIndex, indexToFileRank } from "../gen/genHelpers";
import { fenToPieceArray } from "../fen/fenHelpers";
import { getPieceColor } from "../../pieces/helpers/helpers";

import { getVisibility as getKnightVisibility } from "../../pieces/knight/knight";
import { getVisibility as getBishopVisbility } from "../../pieces/bishop/bishop";
import { getVisibility as getRookVisibility } from "../../pieces/rook/rook";
import { getVisibility as getKingVisibility } from "../../pieces/king/king";

function isKingInCheck(color: string, fen: string): boolean {
  const pieceArray = fenToPieceArray(fen);
  const index = pieceArray.indexOf(color === "w" ? "K" : "k");
  const [file, rank] = indexToFileRank(index);
  let offsets: number[][];
  
  // pawn
  if (color === "w") {
    offsets = [[1, 1], [-1, 1]];
  } else {
    offsets = [[1, -1], [-1, -1]];
  }
  for (const [offsetFile, offsetRank] of offsets) {
    const [targetFile, targetRank] = [file + offsetFile, rank + offsetRank];
    const targetIndex = fileRankToIndex(targetFile, targetRank);
    const targetPiece = pieceArray[targetIndex];
    if (targetPiece === null) continue;

    const targetPieceColor = getPieceColor(targetPiece);
    if (color !== targetPieceColor && targetPiece.toLowerCase() === "p") return true;
  };

  // knight
  const knightIndexes = getKnightVisibility(index);
  for (const index of knightIndexes) {
    const piece = pieceArray[index];
    if (piece === null) continue;

    const pieceColor = getPieceColor(piece);
    if (color !== pieceColor && piece.toLowerCase() === "n") return true;
  }

  // bishop & diag queen
  const bishopIndexes = getBishopVisbility(fen, index);
  for (const index of bishopIndexes) {
    const piece = pieceArray[index];
    if (piece === null) continue;

    const pieceColor = getPieceColor(piece);
    if (color !== pieceColor && (piece.toLowerCase() === "b" || piece.toLowerCase() === "q")) return true;
  }

  // rook & vert/horiz queen
  const rookIndexes = getRookVisibility(fen, index);
  for (const index of rookIndexes) {
    const piece = pieceArray[index];
    if (piece === null) continue;

    const pieceColor = getPieceColor(piece);
    if (color !== pieceColor && (piece.toLowerCase() === "r" || piece.toLowerCase() === "q")) return true;
  }

  // king
  const kingIndexes = getKingVisibility(fen, index);
  for (const index of kingIndexes) {
    const piece = pieceArray[index];
    if (piece === null) continue;

    const pieceColor = getPieceColor(piece);
    if (color !== pieceColor && piece.toLowerCase() === "k") return true;
  }

  return false;
}

export default isKingInCheck;