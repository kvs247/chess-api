import { getVisibility } from "./king";

test("test getVisibility", () => {
  expect(getVisibility(4).sort((a, b) => a - b)).toEqual([3, 5, 11, 12, 13]);
  expect(getVisibility(60).sort((a, b) => a - b)).toEqual([51, 52, 53, 59, 61]);
});