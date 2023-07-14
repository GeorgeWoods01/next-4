import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "PUT" || req.method === "POST") {
    const data = req.body;
    const id = data.id;
    delete data.id;

    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const recipesCollection = db.collection("recipes");

    const result = await recipesCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: data }
    );
    console.log(result);

    client.close();
    res.status(200).json({ message: "recipe updated" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;
