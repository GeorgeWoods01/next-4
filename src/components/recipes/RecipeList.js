import classes from "./RecipeList.module.css";
import RecipeItem from "./RecipeItem";

function RecipeList(props) {
  return (
    <ul className={classes.list}>
      {props.recipes.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          id={recipe.id}
          image={recipe.image}
          title={recipe.title}
          description={recipe.description}
        />
      ))}
    </ul>
  );
}
export default RecipeList;
