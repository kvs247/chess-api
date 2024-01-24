import { getVisibility } from "./pawn";
import { startingFen } from "../../startingPosition";

test("getVisibility pawn", () => {
  // starting position
  let fen = startingFen;
  expect(getVisibility(fen, 8).sort((a, b) => a - b)).toEqual([16, 24]);
  expect(getVisibility(fen, 48).sort((a, b) => a - b)).toEqual([32, 40]);

  // pawns moved 1 rank
  fen = "rnbqkbnr/1ppppppp/p7/8/8/P7/1PPPPPPP/RNBQKBNR w KQkq - 0 2";
  expect(getVisibility(fen, 16).sort((a, b) => a - b)).toEqual([24]);
  expect(getVisibility(fen, 40).sort((a, b) => a - b)).toEqual([32]);

  // pawns moved 2 ranks
  fen = "rnbqkbnr/1ppppppp/8/p7/P7/8/1PPPPPPP/RNBQKBNR w KQkq a6 0 2";
  expect(getVisibility(fen, 24).sort((a, b) => a - b)).toEqual([]);
  expect(getVisibility(fen, 32).sort((a, b) => a - b)).toEqual([]);  

  fen = "k7/8/8/8/8/2B1q3/3P4/7K w - - 0 1";
  expect(getVisibility(fen, 51).sort((a, b) => a - b)).toEqual([35, 42, 43, 44]);

  // en passant
  fen = "rnbqkb1r/ppp1pppp/7n/2PpP3/8/7N/PP1P1PPP/RNBQKB1R w KQkq d6 0 2";
  expect(getVisibility(fen, 26).sort((a, b) => a - b)).toEqual([18, 19]);
  expect(getVisibility(fen, 28).sort((a, b) => a - b)).toEqual([19, 20]);
});