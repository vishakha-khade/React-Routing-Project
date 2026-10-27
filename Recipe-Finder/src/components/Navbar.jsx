import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        flavorly<span>.</span>
      </NavLink>

      <nav className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/recipes">
          Recipes
        </NavLink>

        <NavLink to="/favourites">
          Favourites
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;