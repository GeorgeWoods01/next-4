import RecipeDetails from "../components/recipes/RecipeDetails";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";


function RecipeDetailsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.recipeData.title}</title>
      </Head>
    <RecipeDetails
      image={props.recipeData.image}
      title={props.recipeData.title}
      cuisine={props.recipeData.cuisine}
      description={props.recipeData.description}
    />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    process.env.API_KEY
  );
  const db = client.db();
  const recipesCollection = db.collection("recipes");

  const recipes = await recipesCollection.find({}, { _id: 1 }).toArray();
  return {
    fallback: false,
    paths: recipes.map((recipe) => ({
      params: { recipeId: recipe._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {


  const recipeId = context.params.recipeId;

  const client = await MongoClient.connect(
    process.env.API_KEY
  );
  const db = client.db();
  const recipesCollection = db.collection("recipes");

  const selectedRecipe = await recipesCollection.findOne({
    _id: new ObjectId(recipeId),
  });

  client.close();

  return {
    props: {
      recipeData: {
        id: selectedRecipe._id.toString(),
        title: selectedRecipe.title,
        image: selectedRecipe.image,
        description: selectedRecipe.description,
        cuisine: selectedRecipe.cuisine,
      },
    },
  };
}

export default RecipeDetailsPage;
