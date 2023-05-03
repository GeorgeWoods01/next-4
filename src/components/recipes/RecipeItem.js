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
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
          <button onClick={deleteHandler}>Delete recipe</button>
        </div>
      </Card>
    </li>
  );
}

export default RecipeItem;
