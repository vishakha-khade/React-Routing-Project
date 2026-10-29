import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      {" "}
      <div className="footer-container">
        {" "}
        <div className="footer-brand">
          {" "}
          <Link to="/" className="footer-logo">
            SwapSkill
          </Link>{" "}
          <p>
            Everyone knows something worth sharing. Discover skills, share
            knowledge, and grow together.{" "}
          </p>{" "}
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/explore">Explore Skills</Link>
          <Link to="/add-skill">Share a Skill</Link>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 SwapSkill</span>
        <span>Learn something. Teach something.</span>
      </div>
    </footer>
  );
}

export default Footer;
