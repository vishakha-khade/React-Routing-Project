import { useState } from "react";

function AddSkill() {
const [skill, setSkill] = useState({
title: "",
category: "Technology",
description: "",
type: "Offering",
});

function handleChange(event) {
const { name, value } = event.target;

setSkill({
  ...skill,
  [name]: value,
});

}

function handleSubmit(event) {
event.preventDefault();

const existingSkills = JSON.parse(
  localStorage.getItem("skills") || "[]"
);

const newSkill = {
  ...skill,
  id: Date.now(),
};

localStorage.setItem(
  "skills",
  JSON.stringify([...existingSkills, newSkill])
);

alert("Skill added successfully!");

setSkill({
  title: "",
  category: "Technology",
  description: "",
  type: "Offering",
});

}

return ( <main className="add-skill-page"> <section className="add-skill-header"> <p className="section-label">SHARE YOUR KNOWLEDGE</p> <h1>Add a Skill</h1> <p>
Share what you know or tell others what you want to learn. </p> </section>


  <form className="add-skill-form" onSubmit={handleSubmit}>
    <label htmlFor="title">Skill Name</label>
    <input
      id="title"
      name="title"
      type="text"
      placeholder="e.g. React, Painting, Photography"
      value={skill.title}
      onChange={handleChange}
      required
    />

    <label htmlFor="category">Category</label>
    <select
      id="category"
      name="category"
      value={skill.category}
      onChange={handleChange}
    >
      <option value="Technology">Technology</option>
      <option value="Design">Design</option>
      <option value="Art & Craft">Art & Craft</option>
      <option value="Communication">Communication</option>
      <option value="Business">Business</option>
      <option value="Other">Other</option>
    </select>

    <label htmlFor="type">What do you want to do?</label>
    <select
      id="type"
      name="type"
      value={skill.type}
      onChange={handleChange}
    >
      <option value="Offering">Teach a skill</option>
      <option value="Learning">Learn a skill</option>
    </select>

    <label htmlFor="description">Description</label>
    <textarea
      id="description"
      name="description"
      placeholder="Describe your skill or what you want to learn..."
      value={skill.description}
      onChange={handleChange}
      required
    />

    <button type="submit">Add Skill</button>
  </form>
</main>
);
}

export default AddSkill;
