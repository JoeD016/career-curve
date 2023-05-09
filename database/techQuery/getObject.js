import weaviate from "weaviate-ts-client";
const client = weaviate.client({
  scheme: "http",
  host: "localhost:8080",
});

client.graphql
  .aggregate()
  .withClassName("Candidates")
  .withFields("meta { count }")
  .do()
  .then((res) => {
    console.log(JSON.stringify(res, null, 2));
  })
  .catch((err) => {
    console.error(JSON.stringify(err, null, 2));
  });
