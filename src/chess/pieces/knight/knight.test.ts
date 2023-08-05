import knightCanMove, { getMoves } from "./knight";

test("test knightCanMove", () => {
  const fen = "N6k/2n5/1N6/8/8/8/8/7K w - - 0 1";
  expect(knightCanMove(fen, 0, 10)).toEqual(true); // white knight attacking black knight
  expect(knightCanMove(fen, 0, 17)).toEqual(false); // white knight attacking white knight
  expect(knightCanMove(fen, 10, 0)).toEqual(true); // black knight attacking white kight
  expect(knightCanMove(fen, 10, 4)).toEqual(true); // knight moving to open square in range
  expect(knightCanMove(fen, 10, 2)).toEqual(false); // knight moving to open square out of range
});

test("test getMoves", () => {
  // corners
  expect(getMoves(0).sort()).toEqual([10, 17]);
  expect(getMoves(7).sort()).toEqual([13, 22]);
  expect(getMoves(56).sort()).toEqual([41, 50]);
  expect(getMoves(63).sort()).toEqual([46, 53]);

  // center
  expect(getMoves(27).sort()).toEqual([10, 12, 17, 21, 33, 37, 42, 44])
});