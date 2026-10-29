function About() {
  return (
    <div className="about-page">
      {" "}
      <section className="about-hero">
        {" "}
        <span className="section-label">OUR STORY</span>{" "}
        <h1>
          Knowledge grows when <span>we share it.</span>
        </h1>{" "}
        <p>
          Skillora is a community where people connect through their skills,
          exchange knowledge, and learn from one another.{" "}
        </p>{" "}
      </section>
      <section className="about-content">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            We want to make learning more accessible by helping people share
            what they know and discover something new.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            We believe everyone has a skill worth sharing and something new to
            learn, regardless of their experience.
          </p>
        </div>
      </section>
      <section className="about-quote">
        <h2>Your knowledge can be someone else's opportunity.</h2>
        <p>Share a skill. Start a connection. Keep growing.</p>
      </section>
    </div>
  );
}

export default About;
