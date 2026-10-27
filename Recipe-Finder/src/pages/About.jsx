function About() {
  return (
    <section className="about-page page-section">
      <span className="eyebrow">OUR STORY</span>

      <h1>Making everyday cooking more enjoyable.</h1>

      <p>
        Flavorly is a recipe discovery website designed to help
        people explore dishes, learn new recipes, and find
        inspiration for their next meal.
      </p>

      <p>
        Whether you want a quick breakfast, a comforting dinner,
        or something sweet, Flavorly makes it easy to explore
        recipes in one place.
      </p>

      <div className="about-features">
        <article>
          <h2>Discover</h2>
          <p>Explore recipes from different food categories.</p>
        </article>

        <article>
          <h2>Learn</h2>
          <p>Read ingredients and step-by-step instructions.</p>
        </article>

        <article>
          <h2>Save</h2>
          <p>Keep your favourite recipes together.</p>
        </article>
      </div>
    </section>
  );
}

export default About;