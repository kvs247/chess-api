import knightCanMove from "./knight";
import startingFEN from "../../../../startingFEN";

test("test test", () => {
  const fen = startingFEN;
  expect(knightCanMove(fen, 0, 16)).toBe(true);
});