import { useParams, Link } from "react-router-dom";
import skills from "../data/skills";

function SkillDetails() {
  const { id } = useParams();

  const skill = skills.find((item) => item.id === Number(id));

  if (!skill) {
    return (
      <div className="detail-not-found">
        {" "}
        <h1>Skill Not Found</h1>{" "}
        <p>This skill may not exist in our collection.</p>{" "}
        <Link to="/explore">Explore Other Skills</Link>{" "}
      </div>
    );
  }

  return (
    <main className="details-page">
      {" "}
      <Link to="/explore" className="back-link">
        ← Back to Explore{" "}
      </Link>
      <section className="details-card">
        <div className="details-heading">
          <span className="category-badge">{skill.category}</span>
          <h1>{skill.name}</h1>
          <p>{skill.description}</p>
        </div>

        <div className="details-divider"></div>

        <div className="details-person">
          <div className="person-avatar">{skill.offeredBy.charAt(0)}</div>

          <div>
            <span className="detail-label">SKILL OFFERED BY</span>
            <h3>{skill.offeredBy}</h3>
          </div>
        </div>

        <div className="learning-box">
          <span className="detail-label">LOOKING TO LEARN</span>
          <h3>{skill.learning}</h3>
          <p>
            This person is interested in learning this skill in exchange for
            sharing their own knowledge.
          </p>
        </div>

        <Link to="/explore" className="details-button">
          Explore More Skills
        </Link>
      </section>
    </main>
  );
}

export default SkillDetails;