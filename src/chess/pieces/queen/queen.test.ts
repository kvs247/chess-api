import queenCanMove, { getVisibility } from "./queen";

test("test getVisibility", () => {
  // no obstruction
  let fen = "8/6K1/1q6/8/8/8/2k5/8 w - - 0 1";
  expect(
    getVisibility(fen, 17).sort((a, b) => a - b)
  ).toEqual(
    [1, 3, 8, 9, 10, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 33, 35, 41, 44, 49, 53, 57, 62]
  );

  // obstruction
  fen = "8/6K1/1q6/8/8/8/2k2n2/8 w - - 0 1";
  expect(
    getVisibility(fen, 17).sort((a, b) => a - b)
  ).toEqual(
    [1, 3, 8, 9, 10, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 33, 35, 41, 44, 49, 53, 57]
  );  
});