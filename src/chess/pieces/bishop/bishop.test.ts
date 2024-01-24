import bishopCanMove, { getVisibility } from "./bishop";

test("bishopCanMove", () => {
  // corners
  let fen = "B6K/8/8/8/8/8/8/k7 w - - 0 1";
  expect(bishopCanMove(fen, 0, 54)).toEqual(true); // open square in range
  expect(bishopCanMove(fen, 0, 53)).toEqual(false); // out of range

  // corners with obstruction
  fen = "B6K/8/8/8/4n3/8/8/k7 w - - 0 1";
  expect(bishopCanMove(fen, 0, 36)).toEqual(true); // white bishop attacking black knight
  expect(bishopCanMove(fen, 0, 45)).toEqual(false); // white bishop moving behind knight

  fen = "B6K/8/8/8/4N3/8/8/k7 w - - 0 1";
  expect(bishopCanMove(fen, 0, 36)).toEqual(false); // white bishop attacking white knight
  expect(bishopCanMove(fen, 0, 45)).toEqual(false); // white bishop moving behind knight  
});

test("getVisibility bishop", () => {
  // corners
  let fen = "B6K/8/8/8/8/8/8/k7 w - - 0 1";
  expect(getVisibility(fen, 0).sort((a, b) => a - b)).toEqual([9, 18, 27, 36, 45, 54, 63]);
  expect(getVisibility(fen, 63).sort((a, b) => a - b)).toEqual([0, 9, 18, 27, 36, 45, 54]);

  // corners with obstruction
  fen = "B6K/8/8/8/4n3/8/8/k7 w - - 0 1";
  expect(getVisibility(fen, 0).sort((a, b) => a - b)).toEqual([9, 18, 27, 36]);
  expect(getVisibility(fen, 63).sort((a, b) => a - b)).toEqual([36, 45, 54]);
});