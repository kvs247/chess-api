import { indexToSquare, squareToIndex } from "./helpers/gen/genHelpers";
import { fenToPieceArray, parseFen, pieceArrayToFen } from "./helpers/fen/fenHelpers";
import { getPieceColor } from "./pieces/helpers/helpers";
import isKingInCheck from "./helpers/check/check";
import { PieceArray } from "./types";

import pawnCanMove from "./pieces/pawn/pawn";
import knightCanMove from "./pieces/knight/knight";
import bishopCanMove from "./pieces/bishop/bishop";
import rookCanMove from "./pieces/rook/rook";
import queenCanMove from "./pieces/queen/queen";
import kingCanMove from "./pieces/king/king";

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
      break;
    case "k":
      if (!kingCanMove(fen, fromIndex, toIndex)) return fen;
      break;
  }

  const parsedFen = parseFen(fen);
  let castlingRights = parsedFen.castlingRights;
  
  const currentPieceColor = getPieceColor(piece);
  const newPieceColor = currentPieceColor === "w" ? "b" : "w";
  
  let enPassantTarget = "-";
  if (piece.toLowerCase() === "p" && Math.abs(fromIndex - toIndex) === 16) {
    const middleIndex = Math.min(fromIndex, toIndex) + 8;
    enPassantTarget = indexToSquare(middleIndex);
  }

  // generate new piece array
  pieceArray[fromIndex] = null;
  pieceArray[toIndex] = piece;
  
  // en passant
  const enPassantSquare = parsedFen.enPassantTarget;
  const enPassantIndex = squareToIndex(enPassantSquare);
  if (toIndex === enPassantIndex) {
    const sign = currentPieceColor === "w" ? 1 : -1;
    const removeIndex = toIndex + (8 * sign);
    pieceArray[removeIndex] = null;
  }

  // castling
  if (piece === "R" && fromIndex === 63) castlingRights = castlingRights.replace(/K/g, "");
  if (piece === "R" && fromIndex === 56) castlingRights = castlingRights.replace(/Q/g, "");
  if (piece === "r" && fromIndex === 7) castlingRights = castlingRights.replace(/k/g, "");
  if (piece === "r" && fromIndex === 0) castlingRights = castlingRights.replace(/q/g, "");

  if (piece === "K" && fromIndex === 60) {
    castlingRights = castlingRights.replace(/[KQ]/g, "");
    if (toIndex === 62) {
      pieceArray[63] = null;
      pieceArray[61] = "R";
    }
    if (toIndex === 58) {
      pieceArray[56] = null;
      pieceArray[59] = "R";
    }
  }
  if (piece === "k" && fromIndex === 4) {
    castlingRights = castlingRights.replace(/[kq]/g, "");
    if (toIndex === 6) {
      pieceArray[7] = null;
      pieceArray[5] = "r";
    }
    if (toIndex === 2) {
      pieceArray[0] = null;
      pieceArray[3] = "r";
    }
  }  

  const fenSuffix = ` ${newPieceColor} ${castlingRights} ${enPassantTarget} 0 1`;
  const result = pieceArrayToFen(pieceArray, fenSuffix);

  // check
  if (isKingInCheck(currentPieceColor, result)) return fen;

  return result;
};

export default getFenFromMove;
