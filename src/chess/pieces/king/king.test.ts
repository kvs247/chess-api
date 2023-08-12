import { getMoves } from "./king";

test("test getMoves", () => {
  expect(getMoves(4).sort((a, b) => a - b)).toEqual([3, 5, 11, 12, 13]);
  expect(getMoves(60).sort((a, b) => a - b)).toEqual([51, 52, 53, 59, 61]);
});