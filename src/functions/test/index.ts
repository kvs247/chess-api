import { APIGatewayProxyEvent } from "aws-lambda";
import { getTestTableItems } from "./queries";
import { buildResponse } from "../../helpers/buildResponse";

export async function getTestTable(event: APIGatewayProxyEvent) {
    console.log("event\n", event);
    try {
        const response = await getTestTableItems();
        return buildResponse(200, response);
    } catch (error) {
        console.log("error\n", error);
        buildResponse(500, { Message: "error getting TestTable" });
    }
}