import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import ddbDocClient from "../libs/dynamo_db/ddb_doc_client.js";

const TABLE_NAME = 'quotes'

export async function getAllQuotes() {
    const params = {
        TableName: TABLE_NAME
    };
    const command = new ScanCommand(params);

    const data = await ddbDocClient.send(command);
    return data;
}