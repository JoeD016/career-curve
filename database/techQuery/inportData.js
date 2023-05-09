import weaviate from "weaviate-ts-client";
import fs from "fs";
const client = weaviate.client({
  scheme: "http",
  host: "localhost:8080",
});

// get all schemas
const schemaRes = await client.schema.getter().do();
console.log(schemaRes);

// const mlData = {
//   class: "MLDescription",
//   properties: {
//     name: model.name,
//     type: model.type,
//     description: model.description,
//   },
// };

// const candidatesData = {
//   class: "Candidates",
//   properties: {
//     name: model.name,
//     strength: model.strength,
//     industries: model.industries,
//     resume: model.resume,
//   },
// };
const mlFilePath = "./data.json";
const candidatesFilePath = "./candidates.json";

// Load & import data
async function importModels(filePath) {
  // Load data from a JSON file
  const data = fs.readFileSync(filePath);
  const dataJSON = JSON.parse(data);
  // Prepare a batcher
  let batcher = client.batch.objectsBatcher();
  let counter = 0;
  let batchSize = 3;

  dataJSON.forEach((model) => {
    // Construct an object with a class and properties 'answer' and 'question'
    const obj = {
      class: "Candidates",
      properties: {
        name: model.name,
        strength: model.strength,
        industries: model.industries,
        resume: model.resume,
      },
    };
    // add the object to the batch queue
    batcher = batcher.withObject(obj);

    // When the batch counter reaches batchSize, push the objects to Weaviate
    if (counter++ == batchSize) {
      // flush the batch queue
      batcher
        .do()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });

      // restart the batch queue
      counter = 0;
      batcher = client.batch.objectsBatcher();
    }
  });

  // Flush the remaining objects
  batcher
    .do()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

importModels(candidatesFilePath);
