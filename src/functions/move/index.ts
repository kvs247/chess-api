import { APIGatewayProxyEvent } from "aws-lambda";
import { buildResponse } from "../../helpers/buildResponse";
import { ProcessMoveRequest } from "./types";
import getFenFromMove from "../../chess/index";
import { getGameById, putGame } from "./queries";

module.exports.processMove = async (event: APIGatewayProxyEvent) => {
  console.log("event:\n", event);
  try {
    if (event.body) {
      const body: ProcessMoveRequest = JSON.parse(event.body);
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
      const message = "No request body";
      console.log("Error:\n", message);
      return buildResponse(400, { message });
    }
  } catch (error) {
    console.log("error:\n", error);
    return buildResponse(500, { message: "error processing move" });
  }
};

module.exports.getGameById = async (event: APIGatewayProxyEvent) => {
  console.log("event:\n", event);
  try {
    if (
      event.pathParameters &&
      event.pathParameters.id
    ) {
      const gameId = event.pathParameters.id;
      const [game] = await getGameById(gameId)
      return buildResponse(200, { game });
    } else {
      const message = "event does not have body";
      console.log("error:\n", message);
      return buildResponse(400, { message });
    }
  } catch (error) {
    return buildResponse(500, { message: "error getting game" });
  }
};