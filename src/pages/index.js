import RecipeList from "../components/recipes/RecipeList";
import { MongoClient } from "mongodb";
import Head from "next/head";



export default function Home(props) {
  return (
   <RecipeList recipes={props.recipes} />
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    process.env.API_KEY
  );
  const db = client.db();
  const recipesCollection = db.collection("recipes"); //connect to db

  const recipes = await recipesCollection.find().toArray(); //find all documents in collection and make an array.

  client.close();

  return {
    props: {
      recipes: recipes.map((recipe) => ({
        title: recipe.title,
        image: recipe.image,
        description: recipe.description,
        id: recipe._id.toString(),
      })), //now meetups from mongoDB, need to map data and convert the weird mongodb ID.
    },
    revalidate: 10,
  };
}




// const DUMMY_DATA = [
//   {
//     id: "r1",
//     title: "BibimBap",
//     image:
//       "https://www.seriouseats.com/thmb/KHuz-5lNfyMtGEB1K5YtuXhMAdg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20230113-Bibimbap-AmandaSuarez-hero-331e5e1ffa5b400fbb684e59b14d57c1.JPG",
//     description: "Put rice and things in a bowl",
//   },
//   {
//     id: "r2",
//     title: "Fried Chicken",
//     image:
//       "https://christieathome.com/wp-content/uploads/2020/10/Facetune_06-10-2020-15-37-58-scaled.jpg",
//     description: "Fry the chicken",
//   },
//   {
//     id: "r3",
//     title: "kongkugsu",
//     image:
//       "https://www.koreanbapsang.com/wp-content/uploads/2010/07/DSC_1715-e1536078152215.jpg",
//     description: "make the soybean milk, add the noodles",
//   },
// ];
