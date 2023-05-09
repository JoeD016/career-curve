import weaviate from "weaviate-ts-client";
const client = weaviate.client({
  scheme: "http",
  host: "localhost:8080",
});

const test = ["web development", "mobile development"];

// const resImage = await client.graphql
//   .get()
//   .withClassName("MLDescription")
//   .withFields(["description"])
//   .withNearText({ concepts: test })
//   .withLimit(2)
//   .do();

// client.graphql
//   .get()
//   .withClassName("MLDescription")
//   .withFields("name, type, description")
//   .withNearText({ concepts: test })
//   .withLimit(1)
//   .do()
//   .then((res) => {
//     console.log(JSON.stringify(res, null, 2));
//   })
//   .catch((err) => {
//     console.error(err);
//   });

client.graphql
  .get()
  .withClassName("Candidates")
  .withFields("name, strength, industries")
  .withNearText({ concepts: test })
  .withLimit(9)
  .do()
  .then((res) => {
    console.log(JSON.stringify(res, null, 2));
  })
  .catch((err) => {
    console.error(err);
  });
