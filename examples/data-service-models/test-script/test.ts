import * as sdk from "@extrahorizon/javascript-sdk";

const sdkClient = sdk.createClient({
  host: process.env.API_HOST,
  consumerKey: process.env.API_OAUTH_CONSUMER_KEY,
  consumerSecret: process.env.API_OAUTH_CONSUMER_SECRET,
});



async function main() {
  // Authenticate
  await sdkClient.auth.authenticate({
    token: process.env.API_OAUTH_TOKEN,
    tokenSecret: process.env.API_OAUTH_TOKEN_SECRET,
  });

  const schema = await sdkClient.data.schemas.findByName("vitals-measurement");

  await sdkClient.data.documents.create(schema.id, {
    bodyTemperature: 38,
    heartrate: 120,
    systolicPressure: 130,
    diastolicPressure: 80
  });

  // 

}

main()
  .then(() => {
    console.log("Done");
  })
  .catch((e) => {
    console.log("Error!");
    console.log(e);
  });
