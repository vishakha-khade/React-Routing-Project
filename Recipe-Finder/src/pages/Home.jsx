import { Link } from "react-router-dom";
import recipes from "../data/recipes";
import RecipeCard from "../components/RecipeCard";

function Home({ favourites, onToggleFavourite }) {
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">GOOD FOOD, GOOD MOOD</span>

          <h1>
            Find your next
            <br />
            <span>favourite recipe.</span>
          </h1>

          <p>
            Explore simple, delicious recipes and discover
            something wonderful to cook today.
          </p>

          <Link to="/recipes" className="primary-button">
            Explore Recipes →
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1000"
            alt="A freshly prepared meal"
          />

          <div className="image-note">
            <strong>Fresh ideas, every day</strong>
            <span>Find something delicious.</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">HANDPICKED FOR YOU</span>
            <h2>Popular Recipes</h2>
          </div>

          <Link to="/recipes" className="text-link">
            View all recipes →
          </Link>
        </div>

        <div className="recipe-grid">
          {featuredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavourite={favourites.includes(recipe.id)}
              onToggleFavourite={onToggleFavourite}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;