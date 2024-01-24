import { getVisibility } from "./king";
import { startingFen } from "../../startingPosition";

test("getVisibility king", () => {
  expect(getVisibility(startingFen, 4).sort((a, b) => a - b)).toEqual([3, 5, 11, 12, 13]);
  expect(getVisibility(startingFen, 60).sort((a, b) => a - b)).toEqual([51, 52, 53, 59, 61]);

  let fen = "r3k2r/pppbbppp/2nppn2/6q1/6Q1/2NPPN2/PPPBBPPP/R3K2R w KQkq - 0 1";
  expect(getVisibility(fen, 4).sort((a, b) => a - b)).toEqual([2, 3, 5, 6, 11, 12, 13]);
  expect(getVisibility(fen, 60).sort((a, b) => a - b)).toEqual([51, 52, 53, 58, 59, 61, 62]);
});