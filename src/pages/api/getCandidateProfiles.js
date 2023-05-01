// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import weaviate from "weaviate-ts-client";

const client = weaviate.client({
  scheme: "http",
  host: "localhost:8080",
});

// Example request body:
// {
//   num_response: 3;
//   concepts: "natural, woods";
// }

const handler = async (req, res) => {
  try {
    let queryRes;
    switch (req.method) {
      case "POST": {
        const numberRes = req.body.num_response;
        const reqConcepts = req.body.concepts;
        queryRes = await client.graphql
          .get()
          .withClassName("MLDescription")
          .withFields("name, type, description")
          .withNearText({ concepts: [reqConcepts] })
          .withLimit(numberRes)
          .do();

        break;
      }
    }
    return res.status(200).json(queryRes);
  } catch (e) {
    console.error(e.message);
    return res
      .status(500)
      .send({ message: "An internal server error occurred." });
  }
};

export default handler;
