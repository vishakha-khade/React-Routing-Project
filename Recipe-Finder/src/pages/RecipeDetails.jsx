import { Link, useParams } from "react-router-dom";
import recipes from "../data/recipes";

function RecipeDetails() {
  const { id } = useParams();

  const recipe = recipes.find((item) => item.id === Number(id));

  if (!recipe) {
    return (
      <section className="empty-state page-section">
        <h1>Recipe not found</h1>
        <Link to="/recipes" className="primary-button">
          Browse Recipes
        </Link>
      </section>
    );
  }

  return (
    <section className="detail-page page-section">
      <Link to="/recipes" className="text-link">
        ← Back to Recipes
      </Link>

      <div className="detail-layout">
        <img src={recipe.image} alt={recipe.name} className="detail-image" />

        <div className="detail-content">
          <span className="eyebrow">{recipe.category}</span>

          <h1>{recipe.name}</h1>

          <p>{recipe.description}</p>

          <div className="detail-meta">
            <span>Time: {recipe.time} minutes</span>
            <span>Difficulty: {recipe.difficulty}</span>
          </div>

          <h2>Ingredients</h2>

          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2>Cooking Instructions</h2>

          <ol className="instructions-list">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default RecipeDetails;
