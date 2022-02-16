
import { createOAuth1Client, Task } from '@extrahorizon/javascript-sdk';
/**
 * Task Alert Function
 */

const sdk = createOAuth1Client({
  consumerKey: process.env.API_OAUTH_CONSUMER_KEY,
  consumerSecret: process.env.API_OAUTH_CONSUMER_SECRET,
  host: process.env.API_HOST,
});

interface HeartStat {
  patientName: string, 
  patientMail: string, 

}

export async function handler(task:Task) {
  const { schemaId, documentId } = task.data;

  await sdk.auth.authenticate({
    token: process.env.API_OAUTH_TOKEN,
    tokenSecret: process.env.API_OAUTH_TOKEN_SECRET,
  });

  try {
    const document = await sdk.data.documents.findById<HeartStat>(schemaId, documentId);

    await sdk.mails.send({
      subject: `${document.data.patientName}, check je heart!`,
      recipients: {
        to: [document.data.patientMail],
      },
      body: `Beste ${document.data.patientName}, chech je hartritme, we hebben rare waarden gedetecteerd!`,
    });

  } catch (e) {
    console.error(e);
  }
}