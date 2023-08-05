import {
  getPieceColor,
  isFileRankOnBoard,
  moveTargetingFriendly,
} from "./helpers";

test("test getPieceColor", () => {
  expect(getPieceColor("k")).toEqual("b");
  expect(getPieceColor("Q")).toEqual("w");
  expect(getPieceColor("r")).toEqual("b");
  expect(getPieceColor("R")).toEqual("w");
});

test("test isFileRankOnBoard", () => {
  expect(isFileRankOnBoard(1, 1)).toEqual(true);
  expect(isFileRankOnBoard(-1, 1)).toEqual(false);
  expect(isFileRankOnBoard(1, 0)).toEqual(false);
  expect(isFileRankOnBoard(8, 8)).toEqual(true);
  expect(isFileRankOnBoard(9, 1)).toEqual(false);
  expect(isFileRankOnBoard(-4, 3)).toEqual(false);
});

test("test moveTargetingFriendly", () => {
  const fen = "N6k/2n5/1N6/8/8/8/8/7K w - - 0 1";
  expect(moveTargetingFriendly(fen, 0, 17)).toEqual(true); // white knight attacking white knight
  expect(moveTargetingFriendly(fen, 0, 10)).toEqual(false); // white knight attacking black knight  
  expect(moveTargetingFriendly(fen, 10, 0)).toEqual(false); // black knight attacking white knight
});