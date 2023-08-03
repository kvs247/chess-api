import { scanTable } from "../../helpers/baseQueries";

const dynamoDBTestTableName = "TestTable-dev";

export async function getTestTableItems() {
  const params = {
    TableName: dynamoDBTestTableName,
  };
  const response = await scanTable(params);
  return response;
}