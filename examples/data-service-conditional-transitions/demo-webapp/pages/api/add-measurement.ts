import { createOAuth1Client } from '@extrahorizon/javascript-sdk';

// CHE-ACTUAL-HEARTRATE
const DATA_SCHEMA_ID = '61fbaddec9d0ad154fe05b86';

const sdk = createOAuth1Client({
  host: process.env.API_HOST,
  consumerKey: process.env.API_OAUTH_CONSUMER_KEY,
  consumerSecret: process.env.API_OAUTH_CONSUMER_SECRET,
});

interface Measurement {
  patientName: string;
  patientMail: string;
  heartrate: number;
  systolicPressure: number;
  diastolicPressure: number;
}

export default async function handler(req, res) {

  await sdk.auth.authenticate({
    token: process.env.API_OAUTH_TOKEN,
    tokenSecret: process.env.API_OAUTH_TOKEN_SECRET,
    skipTokenCheck: true
  });

  const measurement: Measurement = req.body;

  console.log(measurement)
  const result = await sdk.data.documents.create(DATA_SCHEMA_ID, measurement);

  res.status(200).json(result);
}
