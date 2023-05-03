import { useState } from 'react';
import  RecipeItem  from '../components/recipes/RecipeItem';
import { MongoClient } from 'mongodb';



const Cuisines = ({ recipes }) => {
  const [koreanRecipes, setKoreanRecipes] = useState(recipes?.filter(recipe => recipe.cuisine === 'Korean'));
  const [americanRecipes, setAmericanRecipes] = useState(recipes?.filter(recipe => recipe.cuisine === 'American'));


  return (
    <>
      <h2>Korean Recipes</h2>
      <ul>
        {koreanRecipes?.map(recipe => (
          <RecipeItem
          key={recipe.id}
          id={recipe.id}
          image={recipe.image}
          title={recipe.title}
          cuisine={recipe.cuisine}
          description={recipe.description}
        />
        ))}
      </ul>

      <h2>American Recipes</h2>
      <ul>
        {americanRecipes?.map(recipe => (
          <RecipeItem
          key={recipe.id}
          id={recipe.id}
          image={recipe.image}
          title={recipe.title}
          cuisine={recipe.cuisine}
          description={recipe.description}
        />
        ))}
      </ul>
    </>
  );
};

export default Cuisines;
