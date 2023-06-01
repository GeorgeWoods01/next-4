import RecipeList from "../components/recipes/RecipeList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home(props) {
  const [query, setQuery] = useState("");
  const [fileteredRecipes, setFilteredRecipes] = useState(props.recipes);
  useEffect(() => {
    const filtered = props.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRecipes(filtered);
  }, [query, props.recipes]);
  return (
    <>
      <Link href="/cuisine/Korean">Korean Recipes</Link>
      <input
        type="text"
        placeholder="Search recipes"
        onChange={(e) => setQuery(e.target.value)}
        style={{
          borderColor: "#be2596",
          borderRadius: "6px",
          fontSize: "1.5rem",
          color: "#2596be",
        }}
      />
      <RecipeList recipes={fileteredRecipes} />
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.API_KEY);
  const db = client.db();
  const recipesCollection = db.collection("recipes"); //connect to db

  const recipes = await recipesCollection.find().toArray(); //find all documents in collection and make an array.

  client.close();

  return {
    props: {
      recipes: recipes.map((recipe) => ({
        title: recipe.title,
        image: recipe.image,
        cuisine: recipe.cuisine,
        id: recipe._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
