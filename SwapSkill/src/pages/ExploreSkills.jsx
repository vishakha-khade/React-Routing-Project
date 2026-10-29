import skills from "../data/skills";
import SkillCard from "../components/SkillCard";

function ExploreSkills() {
return ( <div className="explore"> <h1>Explore Skills</h1> <p>Discover skills people are willing to share.</p>

  <div className="skills-container">
    {skills.map((skill) => (
      <SkillCard key={skill.id} skill={skill} />
    ))}
  </div>
</div>


);
}

export default ExploreSkills;
