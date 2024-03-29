
import classes from './RecipeDetails.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import React from 'react';


function RecipeDetails(props) {
  const router = useRouter();

  function editRecipeHandler() {
    // const url = `/edit-recipe/${props.id}`
    // console.log(url)
    router.push(`/edit-recipe/${props.id}`);
  }

  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt="recipe"
      />
      <h1>{props.title}</h1>
      <h3>{props.cuisine}</h3>
      <p>{props.description}</p>
      <h3>Ingredients</h3><p>{props.ingredients}</p>
      <Link className={classes.link} href='/'>Back to recipes</Link>
      <button className={classes.link} onClick={editRecipeHandler}>Edit Recipe</button>
    </section>
  );
}

export default RecipeDetails;
