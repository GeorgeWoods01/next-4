import React, {useState} from 'react';
import axios from 'axios';
import classes from './RecipeSearch.module.css'



function Inspiration() {
  const [data, setData] = useState({})
  const [recipe, setRecipe] = useState('')
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
  const searchRecipe = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setRecipe('')
    }
  }

  return (
    <div>
    {data.meals ?
    (<div className={classes.Inspiration}>
      <div className={classes.titleText}>
        <h1>Need Inspiration?</h1>
      </div>
      <div className={classes.search}>
        <input
        value={recipe}
        onChange={event => setRecipe(event.target.value)}
        onKeyPress={searchRecipe}
        placeholder='Write something tasty'
        type="text"
        />
      </div>

      {data.meals ? data.meals.map((meal) => (
      <div className={classes.container} key={meal.idMeal}>
        <div className={classes.top}>
          <div className={classes.name}>
            {meal ? <h1>{meal.strMeal}</h1> : null}
          </div>
          <div className={classes.description}>
            {meal ? <p>{meal.strGlass}</p> : null}
            {meal ? <p>{meal.strInstructions}</p> : null}
          </div>
          <div className={classes.bottom}>
            <div className={classes.bottom}>
              {/* theres gotta be a better way to do this */}
              {meal ? <p className={classes.bold}>{meal.strIngredient1}</p> : null}
              {meal ? <p>{meal.strMeasure1}</p> : null}
              {meal ? <p className={classes.bold}>{meal.strIngredient2}</p> : null}
              {meal ? <p>{meal.strMeasure2}</p> : null}
              {meal ? <p className={classes.bold}>{meal.strIngredient3}</p> : null}
              {meal ? <p>{meal.strMeasure3}</p> : null}
              {meal ? <p className={classes.bold}>{meal.strIngredient4}</p> : null}
              {meal ? <p>{meal.strMeasure4}</p> : null}
              {meal ? <p className={classes.bold}>{meal.strIngredient5}</p> : null}
              {meal ? <p>{meal.strMeasure5}</p> : null}
              {meal ? <p className={classes.bold}>{meal.strIngredient6}</p> : null}
              {meal ? <p>{meal.strMeasure6}</p> : null}
              {meal ? <p className={classes.bold}>{meal.strIngredient7}</p> : null}
              {meal ? <p>{meal.strMeasure7}</p> : null}
              {meal ? <p className={classes.bold}>{meal.strIngredient8}</p> : null}
              {meal ? <p>{meal.strMeasure8}</p> : null}
              {meal ? <p className={classes.bold}>{meal.strIngredient9}</p> : null}
              {meal ? <p>{meal.strMeasure9}</p> : null}
              {meal ? <p className={classes.bold}>{meal.strIngredient10}</p> : null}
              {meal ? <p>{meal.strMeasure10}</p> : null}
              {meal ? <p className={classes.bold}>{meal.strIngredient11}</p> : null}
              {meal ? <p>{meal.strMeasure11}</p> : null}
              {meal ? <p className={classes.bold}>{meal.strIngredient12}</p> : null}
              {meal ? <p>{meal.strMeasure12}</p> : null}
              {meal ? <p className={classes.bold}>{meal.strIngredient13}</p> : null}
              {meal ? <p>{meal.strMeasure13}</p> : null}
              {meal ? <p className={classes.bold}>{meal.strIngredient14}</p> : null}
              {meal ? <p>{meal.strMeasure14}</p> : null}
              {meal ? <p className={classes.bold}>{meal.strIngredient15}</p> : null}
              {meal ? <p>{meal.strMeasure15}</p> : null}
              {meal ? <p className={classes.bold}>{meal.strIngredient16}</p> : null}
              {meal ? <p>{meal.strMeasure16}</p> : null}
            </div>
            <div className={classes.image}>
              {meal ? <img className={classes.img} src={meal.strMealThumb} alt="Meal" /> : null }
            </div>
          </div>
        </div>
      </div>
      )) : null}

    </div>) :
      <div className={classes.searchContainer}>
        <div className={classes.titleText}>
          <h1>Need Inspiration?</h1>
        </div>
        <div className={classes.search}>
          <input
          value={recipe}
          onChange={event => setRecipe(event.target.value)}
          onKeyPress={searchRecipe}
          placeholder='Write something tasty'
          type="text"
          />
        </div>
      </div>
    }
    </div>
  );
}

export default Inspiration;
