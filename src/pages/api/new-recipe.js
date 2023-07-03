import { MongoClient } from "mongodb";


async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      process.env.MONGODB_URI
    );
    const db = client.db();
    const recipesCollection = db.collection("recipes");
    const result = await recipesCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "recipe inserted" });
  }
}

export default handler;
