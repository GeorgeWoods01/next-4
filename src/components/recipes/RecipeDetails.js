
import classes from './RecipeDetails.module.css'
import Image from 'next/image';

function RecipeDetails(props) {
  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt="recipe"
      />
      <h1>{props.title}</h1>
      <h3>{props.cuisine}</h3>
      <p>{props.description}</p>
    </section>
  );
}

export default RecipeDetails;
