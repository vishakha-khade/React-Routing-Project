import { Link } from "react-router-dom";

function SkillCard({ skill }) {
return ( <div className="skill-card"> <h3>{skill.name}</h3> <p>Category: {skill.category}</p> <p>{skill.description}</p> <p>Offered by: {skill.offeredBy}</p> <p>Wants to learn: {skill.learning}</p>

  <Link to={`/skill/${skill.id}`}>View Details</Link>
</div>

);
}

export default SkillCard;
