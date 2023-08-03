import AWS from "aws-sdk";
import { queryTable } from "../../helpers/baseQueries";
import { buildResponse } from "../../helpers/buildResponse";

const dynamoDB = new AWS.DynamoDB.DocumentClient();

const dynamoDBTableName = "Games-dev";

export async function putGame(gameData: any) {
  const params = {
    TableName: dynamoDBTableName,
    Item: gameData,
  };
  return await dynamoDB
    .put(params)
    .promise()
    .then(() => {
      return buildResponse(201, {});
    }, (error) => {
      console.log("Error saving new game state:\n", error);
    });
};