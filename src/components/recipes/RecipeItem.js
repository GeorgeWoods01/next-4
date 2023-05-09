import classes from "./RecipeItem.module.css";
import Card from "../ui/Card";
import Image from "next/image";
import { useRouter } from "next/router";

function RecipeItem(props) {
  const router = useRouter();
  const deleteHandler = async () => {
    const response = await fetch(`/api/delete-recipe/${props.id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/");
    }
  };
  function showDetailsHandler() {
    router.push('/' + props.id)
  }
  function editRecipeHandler() {
    router.push(`/edit-recipe/${props.id}`);
  }


  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img
            src={props.image}
            alt={props.title}
          />
        </div>
        <div className={classes.content}>
          <h1>{props.title}</h1>
          <h3>{props.cuisine}</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
          <button onClick={deleteHandler}>Delete recipe</button>
          <button onClick={editRecipeHandler}>Edit Recipe</button>
          {/* <a href='`/edit-recipe/${props.recipe.id}`'>Edit recipe</a> */}
        </div>
      </Card>
    </li>
  );
}

export default RecipeItem;
