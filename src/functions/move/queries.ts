import { MoveRequest } from "./types";

import { processInput } from "./helpers";

export async function processMove(payload: MoveRequest) {
  const { fen, toIndex, fromIndex } = payload;
  const result = processInput(fen, toIndex, fromIndex);
  return result;
};