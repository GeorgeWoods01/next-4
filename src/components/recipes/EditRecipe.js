
import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./EditRecipe.module.css";

function EditRecipe(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const cuisineInputRef = useRef();
  const ingredientsInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredCuisine = cuisineInputRef.current.value;
    const enteredIngredients = ingredientsInputRef.current.value;

    const recipeData = {
      id: props.recipe.id,
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
      cuisine: enteredCuisine,
      ingredients: enteredIngredients,
    };

    props.onEditRecipe(recipeData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            required
            id="title"
            ref={titleInputRef}
            defaultValue={props.recipe.title}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input
            type="url"
            required
            id="image"
            ref={imageInputRef}
            defaultValue={props.recipe.image}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="cuisine">Cuisine</label>
          <input
            type="text"
            required
            id="cuisine"
            ref={cuisineInputRef}
            defaultValue={props.recipe.cuisine}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
            defaultValue={props.recipe.description}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Ingredients</label>
          <textarea
            id="ingredients"
            required
            rows="5"
            ref={ingredientsInputRef}
            defaultValue={props.recipe.ingredients}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Update Recipe</button>
        </div>
      </form>
    </Card>
  );
}

export default EditRecipe;
