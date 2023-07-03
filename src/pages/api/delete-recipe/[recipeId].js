import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  const recipeId = req.query.recipeId;

  if (req.method === "DELETE") {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const recipesCollection = db.collection("recipes");

    const result = await recipesCollection.deleteOne({
      _id: new ObjectId(recipeId),
    });
    console.log(result);
    console.log("success");

    client.close();

    res.status(200).json({ message: "Recipe deleted successfully." });
  }
}

export default handler;
