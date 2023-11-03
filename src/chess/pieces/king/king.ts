import { fileRankToIndex, indexToFileRank } from "../../helpers/gen/genHelpers";
import { getPieceColor, isFileRankOnBoard, moveTargetingFriendly } from "../helpers/helpers";
import { parseFen, fenToPieceArray, parseCastlingRights } from "../../helpers/fen/fenHelpers";

function kingCanMove(
  fen: string,
  fromIndex: number,
  toIndex: number,
): boolean {

  if (moveTargetingFriendly(fen, fromIndex, toIndex)) return false;

  if (getVisibility(fen, fromIndex).includes(toIndex)) return true;

  return false;
}

const offsets = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];

export const getVisibility = (fen: string, index: number): number[] => {
  const parsedFen = parseFen(fen);
  const pieceArray = fenToPieceArray(fen);
  const currentPiece = pieceArray[index];
  const pieceColor = getPieceColor(currentPiece as string);
  const isWhite = pieceColor === "w";
  const parsedCastlingRights = parseCastlingRights(parsedFen.castlingRights);

  const [file, rank] = indexToFileRank(index);

  const moves = [];
  for (const [offsetFile, offsetRank] of offsets) {
    const [targetFile, targetRank] = [file + offsetFile, rank + offsetRank];
    const targetIndex = fileRankToIndex(targetFile, targetRank);
    
    if (!isFileRankOnBoard(targetFile, targetRank)) continue;

    moves.push(targetIndex);
  }

  // castling moves
  const { 
    whiteCanCastleShort,
    whiteCanCastleLong,
    blackCanCastleShort,
    blackCanCastleLong,
  } = parsedCastlingRights;

  const nullIndexes = (...indices: number[]) => {
    for (const index of indices) {
      if (!(pieceArray[index] === null)) return false;
    }
    return true;
  };
  
  if (isWhite) {
    if (whiteCanCastleShort && nullIndexes(61, 62)) moves.push(62);
    if (whiteCanCastleLong && nullIndexes(57, 58, 59)) moves.push(58);
  } else {
    if (blackCanCastleShort && nullIndexes(5, 6)) moves.push(6);
    if (blackCanCastleLong && nullIndexes(1, 2, 3)) moves.push(2);
  }

  return moves;
};

export default kingCanMove;