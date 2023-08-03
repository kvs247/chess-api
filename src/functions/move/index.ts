import { APIGatewayProxyEvent } from "aws-lambda";
import { buildResponse } from "../../helpers/buildResponse";
import { MoveRequest } from "./types";

import { processMove } from "./queries";

module.exports.move = async (event: APIGatewayProxyEvent) => {
  console.log("event:\n", event);
  try {
    if (event.body) {
      const body: MoveRequest = JSON.parse(event.body);
      const { fen, toIndex, fromIndex } = body;
      const response = await processMove({ fen, toIndex, fromIndex });
      return buildResponse(200, { response });
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