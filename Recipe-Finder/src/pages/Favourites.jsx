import { Link } from "react-router-dom";
import recipes from "../data/recipes";
import RecipeCard from "../components/RecipeCard";

function Favourites({ favourites, onToggleFavourite }) {
  const favouriteRecipes = recipes.filter((recipe) =>
    favourites.includes(recipe.id)
  );

  return (
    <section className="section page-section">
      <div className="page-heading">
        <span className="eyebrow">YOUR PERSONAL COLLECTION</span>
        <h1>Favourite Recipes</h1>
        <p>Your saved recipes, all in one place.</p>
      </div>

      {favouriteRecipes.length > 0 ? (
        <div className="recipe-grid">
          {favouriteRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavourite={true}
              onToggleFavourite={onToggleFavourite}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No favourites yet</h2>
          <p>Save recipes by clicking the heart on a recipe card.</p>

          <Link to="/recipes" className="primary-button">
            Explore Recipes
          </Link>
        </div>
      )}
    </section>
  );
}

export default Favourites;