import classes from "./RecipeList.module.css";
import RecipeItem from "./RecipeItem";
import Link from "next/link";

function RecipeList(props) {
  return (
    <>
    <Link className={classes.link} href="/cuisines">Cuisines</Link>
    <ul className={classes.list}>
      {props.recipes?.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          id={recipe.id}
          image={recipe.image}
          title={recipe.title}
          cuisine={recipe.cuisine}
        />
      ))}
    </ul>
    </>
  );
}
export default RecipeList;
