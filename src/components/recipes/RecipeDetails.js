
import classes from './RecipeDetails.module.css'
import Image from 'next/image';
import Link from 'next/link';

function RecipeDetails(props) {
  return (
    <section className={classes.detail}>
      <Link href='/'>Back to recipes</Link>
      <img
        src={props.image}
        alt="recipe"
      />
      <h1>{props.title}</h1>
      <h3>{props.cuisine}</h3>
      <p>{props.description}</p>
      <h3>Ingredients</h3><p>{props.ingredients}</p>
    </section>
  );
}

export default RecipeDetails;
