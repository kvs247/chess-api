import { APIGatewayProxyEvent } from "aws-lambda";
import { buildResponse } from "../../helpers/buildResponse";
import { MoveRequest } from "./types";
import { getFenFromMove } from "../../helpers/chess/helpers";
import { putGame } from "./queries";

module.exports.move = async (event: APIGatewayProxyEvent) => {
  console.log("event:\n", event);
  try {
    if (event.body) {
      const body: MoveRequest = JSON.parse(event.body);
      // const body = event.body;
      const { fen, fromIndex, toIndex } = body;
      const newFen = getFenFromMove(fen, fromIndex, toIndex);
      const newGameState = {
        gameId: "0",
        fen: newFen,
      };
      await putGame(newGameState);
      return buildResponse(200, { newFen });
    } else {
      const message = "No body in HTTP request";
      console.log("Error:\n", message);
      return buildResponse(400, { message });
    }
  } catch (error) {
    console.log("error:\n", error);
    return buildResponse(500, { message: "error processing move" });
  }
};