export async function getStaticPaths() {
  // Fetch the distinct cuisine values from the database
  const cuisineValues = await fetchCuisineValues(); // Implement this function to fetch distinct cuisine values

  // Generate an array of objects containing the `params` object for each cuisine value
  const paths = cuisineValues.map((cuisine) => ({
    params: { cuisine },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const cuisine = params.cuisine;

  // Fetch cuisine-specific recipes from the database based on the `cuisine` parameter
  const recipes = await fetchRecipesByCuisine(cuisine); // Implement this function to fetch recipes by cuisine

  return {
    props: {
      recipes: recipes.map((recipe) => ({
        title: recipe.title,
        image: recipe.image,
        cuisine: recipe.cuisine,
        id: recipe._id.toString(),
      })),
      cuisine,
    },
    revalidate: 10,
  };
}
