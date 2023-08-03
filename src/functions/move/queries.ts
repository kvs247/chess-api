import { MoveRequest } from "./types";

import { processInput } from "./helpers";

export async function processMove(payload: MoveRequest) {
  const { fen, fromIndex, toIndex  } = payload;
  const result = processInput(fen, fromIndex, toIndex);
  return result;
};