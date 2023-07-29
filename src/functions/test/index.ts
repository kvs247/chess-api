import { APIGatewayProxyEvent } from "aws-lambda";

module.exports.getTestTable = async (event: APIGatewayProxyEvent) => {
    console.log("event\n", event);
    try {
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            },
            body: {
                msg: "hello-"
            },
        };
    } catch (error) {
        console.log("error\n", error);
    }
}