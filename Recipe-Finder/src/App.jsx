import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipe";
import RecipeDetails from "./pages/RecipeDetails";
import Favourites from "./pages/Favourites";
import About from "./pages/About";

import "./App.css";

function App() {
  const [favourites, setFavourites] = useState(() => {
    try {
      const saved = localStorage.getItem("flavorly-favourites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("flavorly-favourites", JSON.stringify(favourites));
  }, [favourites]);

  function toggleFavourite(id) {
    setFavourites((previousFavourites) => {
      if (previousFavourites.includes(id)) {
        return previousFavourites.filter((favouriteId) => favouriteId !== id);
      }

      return [...previousFavourites, id];
    });
  }

  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                favourites={favourites}
                onToggleFavourite={toggleFavourite}
              />
            }
          />

          <Route
            path="/recipes"
            element={
              <Recipes
                favourites={favourites}
                onToggleFavourite={toggleFavourite}
              />
            }
          />

          <Route path="/recipes/:id" element={<RecipeDetails />} />

          <Route
            path="/favourites"
            element={
              <Favourites
                favourites={favourites}
                onToggleFavourite={toggleFavourite}
              />
            }
          />

          <Route path="/about" element={<About />} />

          <Route
            path="*"
            element={
              <section className="empty-state page-section">
                <h1>404 - Page Not Found</h1>
                <p>The page you requested does not exist.</p>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
