require('./build')
  .handler({
    data: {
      schemaId: '60c84c3550fb8a61ce095b11',
      documentId: '60e41e5d50fb8a820a095be9',
    }
  })
  .then(() => console.log('FINISHED'));