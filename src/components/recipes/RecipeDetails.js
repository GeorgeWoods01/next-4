
import classes from './RecipeDetails.module.css'

function RecipeDetails(props) {
  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt="recipe"
      />
      <h1>{props.title}</h1>
      <h3>{props.cusine}</h3>
      <p>{props.description}</p>
    </section>
  );
}

export default RecipeDetails;
