import isKingInCheck from "./check";

test("pawn giving check", () => {
  let fen = "1p6/8/8/3k4/4P3/8/8/7K b - - 0 1";
  expect(isKingInCheck("b", fen)).toEqual(true);

  fen = "1p6/8/4P3/3k4/8/8/8/7K b - - 0 1";
  expect(isKingInCheck("b", fen)).toEqual(false);

  fen = "k7/8/3p4/4K3/8/8/8/6P1 w - - 0 1";
  expect(isKingInCheck("w", fen)).toEqual(true);

  fen = "k7/8/8/4K3/3p4/8/8/6P1 w - - 0 1";
  expect(isKingInCheck("w", fen)).toEqual(false);
});

test("knight giving check", () => {
  let fen = "8/3N4/8/4k3/8/8/q7/7K b - - 0 1";
  expect(isKingInCheck("b", fen)).toEqual(true);

  fen = "8/8/3N4/4k3/8/8/q7/7K b - - 0 1";
  expect(isKingInCheck("b", fen)).toEqual(false);

  fen = "k7/8/3n4/8/4K3/8/8/1Q6 w - - 0 1";
  expect(isKingInCheck("w", fen)).toEqual(true);

  fen = "k7/8/8/3n4/4K3/8/8/1Q6 w - - 0 1";
  expect(isKingInCheck("w", fen)).toEqual(false);  
});

test("bishop giving check", () => {
  let fen = "8/2B5/8/4k3/8/8/8/7K b - - 0 1";
  expect(isKingInCheck("b", fen)).toEqual(true);

  fen = "8/6B1/8/4k3/8/8/8/7K b - - 0 1";
  expect(isKingInCheck("b", fen)).toEqual(true);

  // blocked
  fen = "8/6B1/5p2/8/8/2k5/8/7K b - - 0 1";
  expect(isKingInCheck("b", fen)).toEqual(false);

  fen = "k7/8/8/8/3K4/8/8/b7 w - - 0 1";
  expect(isKingInCheck("w", fen)).toEqual(true);

  fen = "k7/8/8/8/3K4/8/8/6b1 w - - 0 1";
  expect(isKingInCheck("w", fen)).toEqual(true);

  // blocked
  fen = "k7/8/8/8/3K4/8/5P2/6b1 w - - 0 1";
  expect(isKingInCheck("w", fen)).toEqual(false);
});

test("rook giving check", () => {
  let fen = "8/8/8/3k2R1/8/8/8/7K b - - 0 1";
  expect(isKingInCheck("b", fen)).toEqual(true);

  fen = "8/8/8/3k4/8/8/3R4/7K b - - 0 1";
  expect(isKingInCheck("b", fen)).toEqual(true);

  // blocked
  fen = "8/8/8/3k4/8/3p4/3R4/7K b - - 0 1";
  expect(isKingInCheck("b", fen)).toEqual(false);

  fen = "k7/4r3/8/4K3/8/8/8/8 w - - 0 1";
  expect(isKingInCheck("w", fen)).toEqual(true);

  fen = "k7/8/8/1r2K3/8/8/8/8 w - - 0 1";
  expect(isKingInCheck("w", fen)).toEqual(true);

  // blocked
  fen = "k7/8/8/1rP1K3/8/8/8/8 w - - 0 1";
  expect(isKingInCheck("w", fen)).toEqual(false);  
});

test("queen giving check", () => {
  let fen = "8/5Q2/8/3k4/8/8/8/7K b - - 0 1";
  expect(isKingInCheck("b", fen)).toEqual(true);

  fen = "8/8/8/3k3Q/8/8/8/7K b - - 0 1";
  expect(isKingInCheck("b", fen)).toEqual(true);

  // blocked
  fen = "8/8/8/3k2pQ/8/8/8/7K b - - 0 1";
  expect(isKingInCheck("b", fen)).toEqual(false);

  fen = "k7/8/2q5/8/4K3/8/8/8 w - - 0 1";
  expect(isKingInCheck("w", fen)).toEqual(true);

  fen = "k7/8/8/8/2q1K3/8/8/8 w - - 0 1";
  expect(isKingInCheck("w", fen)).toEqual(true);

  // blocked
  fen = "k7/8/8/8/2qPK3/8/8/8 w - - 0 1";
  expect(isKingInCheck("w", fen)).toEqual(false);    
});

test("king giving check", () => {
  let fen = "8/5kbB/4K3/8/8/8/8/8 b - - 0 1";
  expect(isKingInCheck("b", fen)).toEqual(true);

  fen = "8/5kbB/4K3/8/8/8/8/8 w - - 0 1";
  expect(isKingInCheck("w", fen)).toEqual(true);
});