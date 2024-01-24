import { isMoveTargetingFriendly } from "../helpers/helpers";
import { getVisibility as getBishopMoves } from "../bishop/bishop";
import { getVisibility as getRookMoves } from "../rook/rook";

function queenCanMove(
  fen: string,
  fromIndex: number,
  toIndex: number,
): boolean {

  if (isMoveTargetingFriendly(fen, fromIndex, toIndex)) return false;

  if (getVisibility(fen, fromIndex).includes(toIndex)) return true;

  return false;
}

export const getVisibility = (fen: string, index: number): number[] => {
  return [
    ...getBishopMoves(fen, index),
    ...getRookMoves(fen, index),
  ];
};

export default queenCanMove;