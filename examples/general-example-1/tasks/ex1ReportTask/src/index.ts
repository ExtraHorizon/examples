// production code here

import { authenticateSDK, sdk } from "./services/sdk";

export async function handler(event: any) {
  await authenticateSDK();

  const doc = await sdk.data.documents.findById(event.data.schemaId,event.data.documentId);

  const template = await sdk.templates.findByName('ex1Report');
  const pdf = await sdk.templates.resolveAsPdf(template.id,{
    content:doc.data
  });

  await sdk.mails.send({
    recipients: {
      to: ["john.doe@extrahorizon.com"]
    },
    subject: 'Your Report',
    body: 'Hello, you can find your report in attachement.',
    attachments: [{
      name: 'yourReport.pdf',
      content:pdf.toString('base64'),
      type: 'application/pdf'
    }]
  });
}