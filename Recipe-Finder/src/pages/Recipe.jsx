import { useState } from "react";
import recipes from "../data/recipes";
import RecipeCard from "../components/RecipeCard";

function Recipes({ favourites, onToggleFavourite }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(recipes.map((recipe) => recipe.category)),
  ];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || recipe.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="section page-section">
      <div className="page-heading">
        <span className="eyebrow">EXPLORE SOMETHING DELICIOUS</span>
        <h1>All Recipes</h1>
        <p>Find your next favourite dish.</p>
      </div>

      <div className="recipe-filters">
        <input
          type="search"
          placeholder="Search recipes..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search recipes"
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Filter by category"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <p className="result-count">{filteredRecipes.length} recipes found</p>

      {filteredRecipes.length > 0 ? (
        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavourite={favourites.includes(recipe.id)}
              onToggleFavourite={onToggleFavourite}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No recipes found</h2>
          <p>Try another search term or category.</p>
        </div>
      )}
    </section>
  );
}

export default Recipes;
