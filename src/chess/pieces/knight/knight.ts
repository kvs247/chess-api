import { fenToPieceArray } from "../../helpers/fen/fenHelpers";
import { PieceArray } from "../../types";
import { offsets } from "./helpers";
import { indexToFileRank } from "../../helpers/gen/genHelpers";

function knightCanMove(
  fen: string,
  fromIndex: number,
  toIndex: number,
): boolean {


  return true;
}

function getMoves(fen: string, index: number) {
  const pieceArray = fenToPieceArray(fen);
  const [file, rank] = indexToFileRank(index);
  for (const [offsetFile, offsetRank] of offsets) {
    const newFile = file + offsetFile;
    const newRank = rank + offsetRank;
  }
}

export default knightCanMove;