import { ParsedFEN } from "../../functions/move/types";

export const getFenFromMove = (
  fen: string,
  fromIndex: number,
  toIndex: number,
): string => {
  const pieceArray = fenToPieceArray(fen);
  const piece = pieceArray[fromIndex];
  pieceArray[fromIndex] = null;
  pieceArray[toIndex] = piece;
  const result = pieceArrayToFen(pieceArray);
  return result;
};

export const isNumeric = (text: string): boolean => {
  return Number(text) === Number(parseFloat(text));
};

export const parseFEN = (fen: string): ParsedFEN => {
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

export const fenToPieceArray = (fen: string): Array<string | null> => {
  const parsedFEN = parseFEN(fen);
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

const pieceArrayToFen = (
  pieceArray: Array<string | null>,
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