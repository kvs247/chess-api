import { fileRankToIndex, indexToFileRank } from "../../helpers/gen/genHelpers";
import { isFileRankOnBoard, moveTargetingFriendly } from "../helpers/helpers";

function kingCanMove(
  fen: string,
  fromIndex: number,
  toIndex: number,
): boolean {

  if (moveTargetingFriendly(fen, fromIndex, toIndex)) return false;

  if (getMoves(fromIndex).includes(toIndex)) return true;

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

export const getMoves = (index: number): number[] => {
  const [file, rank] = indexToFileRank(index);

  const moves = [];
  for (const [offsetFile, offsetRank] of offsets) {
    const [targetFile, targetRank] = [file + offsetFile, rank + offsetRank];
    const targetIndex = fileRankToIndex(targetFile, targetRank);
    
    if (!isFileRankOnBoard(targetFile, targetRank)) continue;

    moves.push(targetIndex);
  }

  return moves;
};

export default kingCanMove;