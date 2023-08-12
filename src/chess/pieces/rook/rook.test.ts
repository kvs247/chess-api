import rookCanMove, { getVisibility } from "./rook";

test("test getVisibility", () => {
    // corners
    let fen = "R7/6K1/8/8/8/8/2k5/8 w - - 0 1";
    expect(getVisibility(fen, 0).sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56]);
    expect(getVisibility(fen, 63).sort((a, b) => a - b)).toEqual([7, 15, 23, 31, 39, 47, 55, 56, 57, 58, 59, 60, 61, 62]);
  
    // corners with obstruction
    fen = "R1n5/6K1/8/8/8/b7/2k5/8 w - - 0 1";
    expect(getVisibility(fen, 0).sort((a, b) => a - b)).toEqual([1, 2, 8, 16, 24, 32, 40]);
  });