// import { APIGatewayProxyEvent } from "aws-lambda";
// import { getTestTableItems } from "./queries";

module.exports.getTestTable = async (event: any) => {
    console.log("wego")
    console.log("event\n", event);
    try {
        // const response = await getTestTableItems();
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({
                msg: "hello-"
            }),
        };
    } catch (error) {
        console.log("error\n", error);
    }
};