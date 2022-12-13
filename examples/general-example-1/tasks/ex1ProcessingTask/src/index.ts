// production code here
import { Task } from "@extrahorizon/javascript-sdk";
import { authenticateSDK, sdk } from "./services/sdk";

export async function handler(task: Task) {
  await authenticateSDK();

  const { schemaId, documentId } = task.data

  const validDiagnoses = ['positive','negative', 'inconclusive'];

  try {
    const document = await sdk.data.documents.findById<any>(schemaId, documentId);

    let diagnosis = 'measurementError';

    // Select random diagosis result as a simulation of processing algo
    if(document.data.heartrate && document.data.heartrate > 40){
      diagnosis = validDiagnoses[Math.round(Math.random()*validDiagnoses.length)];
    }
    
    await sdk.data.documents.transition(schemaId, documentId, {
      id: "63862878d454dd883962554f",
      data: {
        diagnosis
      }
    });
  
  } catch (e){
    console.error(e);
  }
}
