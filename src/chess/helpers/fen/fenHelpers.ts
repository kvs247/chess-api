import { ParsedFEN } from "../../../functions/move/types";
import { PieceArray } from "../../types";
import { isNumeric } from "../gen/genHelpers";

export const parseFen = (fen: string): ParsedFEN => {
  const [
    piecePlacement,
    activeColor,
    castlingRights,
    enPassantTarget,
    halfmoveClock,
    fullmoveClock,
  ] = fen.split(" ");
  return {
    piecePlacement,
    activeColor,
    castlingRights,
    enPassantTarget,
    halfmoveClock,
    fullmoveClock,
  };
};

export const fenToPieceArray = (fen: string): PieceArray => {
  const parsedFEN = parseFen(fen);
  const pieceArray = parsedFEN.piecePlacement
  .split("")
  .filter(char => char !== "/")
  .map((char) => {
    if (isNumeric(char)) {
      const num = parseInt(char);
      return Array(num).fill(null);
    }
    return char;
  }).flat();
  
  return pieceArray;
};

export const pieceArrayToFen = (
  pieceArray: PieceArray,
  suffix = " w KQkq - 0 1",
  ): string => {
    let result = "";
    
    pieceArray.forEach((ele, idx) => {
    if (idx % 8 === 0 && idx !== 0) {
      result += "/";
    }
    if (ele === null) {
      result += "$";
    } else {
      result += ele;
    }
  });
  
  for (let i = 8; i > 0; i--) {
    const pattern = Array(i).fill("$").join("");
    result = result.replaceAll(pattern, String(i));
  }
  
  return result + suffix;
};
