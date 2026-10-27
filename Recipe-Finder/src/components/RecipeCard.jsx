import { Link } from "react-router-dom";

function RecipeCard({ recipe, onToggleFavourite, isFavourite }) {
  return (
    <article className="recipe-card">
      <div className="recipe-image-wrapper">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="recipe-image"
        />

        <button
          type="button"
          className={`favourite-button ${
            isFavourite ? "favourite-active" : ""
          }`}
          onClick={() => onToggleFavourite(recipe.id)}
          aria-label={
            isFavourite ? "Remove from favourites" : "Add to favourites"
          }
        >
          {isFavourite ? "♥" : "♡"}
        </button>

        <span className="recipe-category">{recipe.category}</span>
      </div>

      <div className="recipe-content">
        <div className="recipe-meta">
          <span>{recipe.time} min</span>
          <span>{recipe.difficulty}</span>
        </div>

        <h3>{recipe.name}</h3>

        <p>{recipe.description}</p>

        <Link to={`/recipes/${recipe.id}`} className="view-recipe">
          View Recipe →
        </Link>
      </div>
    </article>
  );
}

export default RecipeCard;