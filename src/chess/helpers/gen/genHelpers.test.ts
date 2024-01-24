import {
  isNumeric,
  indexToFileRank,
  fileRankToIndex,
  squareToIndex,
  indexToSquare,
} from "./genHelpers";

test("isNumeric", () => {
  expect(isNumeric("wowwhatacoolsentencewehavehere")).toBe(false);
  expect(isNumeric("#%@*&*^*%(&#$%")).toBe(false);
  expect(isNumeric("57357345")).toBe(true);
  expect(isNumeric("3")).toBe(true);
  expect(isNumeric("butfjkh5fgsdtbsd")).toBe(false);
  expect(isNumeric("3521875962$352315")).toBe(false);
});

test("indexToFileRank", () => {
  expect(indexToFileRank(0)).toEqual([1, 8]);
  expect(indexToFileRank(7)).toEqual([8, 8]);
  expect(indexToFileRank(56)).toEqual([1, 1]);
  expect(indexToFileRank(63)).toEqual([8, 1]);
});

test("fileRanktToInex", () => {
  expect(fileRankToIndex(1, 8)).toEqual(0);
  expect(fileRankToIndex(8, 8)).toEqual(7);
  expect(fileRankToIndex(1, 1)).toEqual(56);
  expect(fileRankToIndex(8, 1)).toEqual(63);
});

test("squareToIndex", () => {
  expect(squareToIndex("a8")).toEqual(0);
  expect(squareToIndex("A8")).toEqual(0);
  expect(squareToIndex("h8")).toEqual(7);
  expect(squareToIndex("H8")).toEqual(7);
  expect(squareToIndex("a1")).toEqual(56);
  expect(squareToIndex("A1")).toEqual(56);  
  expect(squareToIndex("h1")).toEqual(63);
  expect(squareToIndex("H1")).toEqual(63);  

  expect(squareToIndex("d5")).toEqual(27);
  expect(squareToIndex("D5")).toEqual(27);    
});

test("indexToSquare", () => {
  expect(indexToSquare(0)).toEqual("a8");
  expect(indexToSquare(7)).toEqual("h8");
  expect(indexToSquare(56)).toEqual("a1");
  expect(indexToSquare(63)).toEqual("h1");

  expect(indexToSquare(27)).toEqual("d5");
});
