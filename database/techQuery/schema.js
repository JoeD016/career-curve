import weaviate from "weaviate-ts-client";

// const client = weaviate.client({
//   scheme: "https",
//   host: "career-curve-profile-4690fsyt.weaviate.network", // Replace with your endpoint
// });
const client = weaviate.client({
  scheme: "http",
  host: "localhost:8080",
});

// const ProfileSchemaConfig = {
//   class: "CandidateProfile",
//   vectorizer: "text2vec-huggingface",
//   vectorizerIndexType: "hnsw",
//   properties: [
//     {
//       name: "name",
//       description: "Name of the candidate",
//       dataType: ["string"],
//       moduleConfig: {
//         "text2vec-huggingface": {
//           skip: true,
//           vectorizePropertyName: true,
//         },
//       },
//     },
//     {
//       name: "education",
//       dataType: ["string"],
//     },
//     {
//       name: "experience",
//       dataType: ["string"],
//     },
//     {
//       name: "skills",
//       dataType: ["string"],
//     },
//   ],
// };

const classObj = {
  class: "MLDescription",
  vectorizer: "text2vec-transformers",
  vectorizerIndexType: "hnsw",
  properties: [
    {
      name: "name",
      dataType: ["string"],
    },
    {
      name: "type",
      dataType: ["string"],
    },
    {
      name: "description",
      dataType: ["string"],
    },
  ],
};

const classObj2 = {
  class: "Candidates",
  vectorizer: "text2vec-transformers",
  vectorizerIndexType: "hnsw",
  properties: [
    {
      name: "name",
      dataType: ["string"],
    },
    {
      name: "strength",
      dataType: ["string"],
    },
    {
      name: "industries",
      dataType: ["string"],
    },
    {
      name: "resume",
      dataType: ["string"],
    },
  ],
};

// delete a schema
const schemaName = "MLDescription";
// await client.schema.classDeleter().withClassName(schemaName).do();

// add a schema
await client.schema.classCreator().withClass(classObj2).do();

// delete a class
// var className = "Candidates"; // Replace with your class name

// client.schema
//   .classDeleter()
//   .withClassName(className)
//   .do()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
