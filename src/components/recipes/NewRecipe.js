import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewRecipe.module.css';

function NewRecipe(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const cuisineInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredCuisine = cuisineInputRef.current.value;

    const recipeData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
      cuisine: enteredCuisine,
    };

    props.onAddRecipe(recipeData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='cuisine'>Cuisine</label>
          <input type='text' required id='cuisine' ref={cuisineInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add <span style={{color: '#2596be'}}>R</span>ecipe</button>
        </div>
      </form>
    </Card>
  );
}

export default NewRecipe;
