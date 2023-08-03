import AWS from "aws-sdk";

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export const scanTable = async (params: any) => {
  const scanResults: any[] = [];
  let response;
  do {
    response = await dynamoDB.scan(params).promise();
    if (response.Items) {
      response.Items.forEach((item) => scanResults.push(item));
    }
    params.ExclusiveStartKey = response.LastEvaluatedKey;
  } while (typeof response.LastEvaluatedKey !== "undefined");

  return scanResults;
};

export const queryTable = async (params: any) => {
  const queryResults: any[] = [];
  let response;
  do {
    response = await dynamoDB.query(params).promise();
    if (response.Items) {
      response.Items.forEach((item) => queryResults.push(item));
    }
    params.ExclusiveStartKey = response.LastEvaluatedKey;
  } while (typeof response.LastEvaluatedKey !== "undefined");

  return queryResults;
};