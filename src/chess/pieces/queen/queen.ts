import { moveTargetingFriendly } from "../helpers/helpers";
import { getMoves as getBishopMoves } from "../bishop/bishop";
import { getMoves as getRookMoves } from "../rook/rook";

function queenCanMove(
  fen: string,
  fromIndex: number,
  toIndex: number,
): boolean {

  if (moveTargetingFriendly(fen, fromIndex, toIndex)) return false;

  if (getMoves(fen, fromIndex).includes(toIndex)) return true;

  return false;
}

export const getMoves = (fen: string, index: number): number[] => {
  return [
    ...getBishopMoves(fen, index),
    ...getRookMoves(fen, index),
  ];
};

export default queenCanMove;