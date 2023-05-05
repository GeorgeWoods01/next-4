
import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "PUT") {
    const data = req.body;
    const id = data.id;
    delete data.id;

    const client = await MongoClient.connect(process.env.API_KEY);
    const db = client.db();
    const recipesCollection = db.collection("recipes");

    const result = await recipesCollection.updateOne(
      { _id: ObjectId(id) },
      { $set: data }
    );
    console.log(result);

    client.close();
    res.status(200).json({ message: "recipe updated" });
  }
}

export default handler;
