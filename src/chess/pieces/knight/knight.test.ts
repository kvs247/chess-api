import knightCanMove from "./knight";
import { startingFen } from "../../startingPosition";

test("test test", () => {
  const fen = startingFen;
  expect(knightCanMove(fen, 0, 16)).toBe(true);
});