import ddbDocClient from "../libs/dynamo_db/ddb_doc_client.js";
import { v4 as uuidv4 } from 'uuid';
import {
    PutCommand,
    GetCommand,
    UpdateCommand,
    DeleteCommand,
    ScanCommand,
} from "@aws-sdk/lib-dynamodb";

const tablNameInput = {
    TableName: 'quotes'
}

const keyInput = (id) => {
    return {
        Key: {
            'uuid': id
        }
    }
}

const currentTimestamp = () => {
    return new Date().toISOString();
}

export async function getAllQuotes() {
    try {
        const command = new ScanCommand(tablNameInput);

        const data = await ddbDocClient.send(command);
        return data.Items;
    } catch (error) {
        console.error(`Get all quotes failed: ${error}`);
    }
}

export async function getQuote(id) {
    try {
        const command = new GetCommand({
            ...tablNameInput,
            ...keyInput(id)
        });

        const data = await ddbDocClient.send(command);
        return data.Item;
    } catch (error) {
        console.error(`Get quote failed: ${error}`);
    }
}

export async function createQuote(quote) {
    try {
        const timestamp = currentTimestamp();
        let newQuote = {
            uuid: uuidv4(),
            ...quote,
            created_at: timestamp,
            updated_at: timestamp
        };
        const command = new PutCommand({
            ...tablNameInput,
            Item: newQuote
        });

        await ddbDocClient.send(command);
        return newQuote;
    } catch (error) {
        console.error(`Create quote failed: ${error}`);
    }
}

export async function updateQuote(id, quote) {
    try {
        let updateExpression = 'set title = :t, author = :a, updated_at = :u';
        let expressionAttributeValues = {
            ':t': quote.title,
            ':a': quote.author,
            ':u': currentTimestamp(),
        };
        let expressionAttributeNames = {
            '#id': 'uuid',
        };

        if (quote.description) {
            updateExpression += ' ,description = :d';
            expressionAttributeValues[':d'] = quote.description;
        } else {
            updateExpression += ' remove description';
        }
        
        const command = new UpdateCommand({
            ...tablNameInput,
            ...keyInput(id),
            ConditionExpression: 'attribute_exists(#id)',
            UpdateExpression: updateExpression,
            ExpressionAttributeValues: expressionAttributeValues,
            ExpressionAttributeNames: expressionAttributeNames,
            ReturnValues: 'ALL_NEW'
        });

        const result = await ddbDocClient.send(command);
        return result.Attributes;
    } catch (error) {
        if(error.name === 'ConditionalCheckFailedException') {
            return createErrorBody(4001, 'Quote not found');
        } else {
            return createErrorBody(5000, 'unknown error');
        }
    }
}

export async function deleteQuote(id) {
    try {
        const command = new DeleteCommand({
            ...tablNameInput,
            ...keyInput(id),
            ReturnValues: 'ALL_OLD'
        });
        const result = await ddbDocClient.send(command);
        return result.Attributes;
    } catch (error) {
        console.log(`Delete quote failed: ${error}`);
    }
}

function createErrorBody(code, description) {
    return { success: false, code: code, description: description };
}