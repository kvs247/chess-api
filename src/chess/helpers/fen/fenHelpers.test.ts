import { 
  parseFen,
  fenToPieceArray,
  pieceArrayToFen,
} from "./fenHelpers";
import { startingFen, startingPieceArray } from "../../startingPosition";

test("parseFen", () => {
  const startingFenParsed = {
    piecePlacement: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
    activeColor: "w",
    castlingRights: "KQkq",
    enPassantTarget: "-",
    halfmoveClock: "0",
    fullmoveClock: "1",
  };
  expect(parseFen(startingFen)).toEqual(startingFenParsed);
});

test("fenToPieceArray", () => {
  expect(fenToPieceArray(startingFen)).toEqual(startingPieceArray);
});

test("pieceArrayToFen", () => {
  expect(pieceArrayToFen(startingPieceArray)).toEqual(startingFen);
});