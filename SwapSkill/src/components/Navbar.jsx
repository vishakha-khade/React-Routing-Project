import { Link } from "react-router-dom";

function Navbar() {
return ( <nav> <h2>SwapSkill</h2>

  <div>
    <Link to="/">Home</Link>
    <Link to="/explore">Explore Skills</Link>
    <Link to="/add-skill">Add Skill</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </div>
</nav>


);
}

export default Navbar;