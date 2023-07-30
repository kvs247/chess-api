import { APIGatewayProxyEvent } from "aws-lambda";
import { getTestTableItems } from "./queries";
import { buildResponse } from "../../helpers/buildResponse";

module.exports.getTestTable = async (event: APIGatewayProxyEvent) => {
    console.log("event\n", event);
    try {
        const response = await getTestTableItems();
        return buildResponse(200, { response });
    } catch (error) {
        console.log("error\n", error);
        return buildResponse(500, { message: "error getting TestTable items" });
    }
};