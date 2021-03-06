"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const javascript_sdk_1 = require("@extrahorizon/javascript-sdk");
const sdk = (0, javascript_sdk_1.createOAuth1Client)({
    consumerKey: process.env.API_OAUTH_CONSUMER_KEY,
    consumerSecret: process.env.API_OAUTH_CONSUMER_SECRET,
    host: process.env.API_HOST,
});
async function handler(task) {
    const { schemaId, documentId } = task.data;
    await sdk.auth.authenticate({
        token: process.env.API_OAUTH_TOKEN,
        tokenSecret: process.env.API_OAUTH_TOKEN_SECRET,
    });
    try {
        const document = await sdk.data.documents.findById(schemaId, documentId);
        await sdk.mails.send({
            templateId: "624319b0cff47e000714b147",
            recipients: {
                to: [document.data.patientMail],
            },
            content: { name: document.data.patientName }
        });
    }
    catch (e) {
        console.error(e);
    }
}
exports.handler = handler;
