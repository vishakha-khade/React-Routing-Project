import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      {/* Hero Section */}{" "}
      <section className="home-hero">
        {" "}
        <div className="hero-content">
          {" "}
          <span className="section-label">LEARN TOGETHER. GROW TOGETHER. </span>
          <h1>
            Your Skills Have Value.
            <br />
            <span>Exchange Them.</span>
          </h1>
          <p>
            Swap Skill is a community where people share what they know and
            learn something new from others. Exchange knowledge, discover
            talents, and grow together without traditional learning barriers.
          </p>
          <div className="hero-buttons">
            <Link to="/explore" className="primary-btn">
              Explore Skills
            </Link>

            <Link to="/add-skill" className="secondary-btn">
              Share Your Skill
            </Link>
          </div>
          <div className="hero-note">
            Learn something new. Teach something you love.
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-main-card">
            <span className="visual-icon">01</span>
            <h3>Share What You Know</h3>
            <p>Everyone has something valuable to teach.</p>
          </div>

          <div className="visual-swap">⇄</div>

          <div className="visual-second-card">
            <span className="visual-icon">02</span>
            <h3>Learn Something New</h3>
            <p>Discover skills from people around you.</p>
          </div>

          <div className="floating-tag">Knowledge has no limits</div>
        </div>
      </section>
      {/* Introduction Section */}
      <section className="home-intro">
        <div className="home-section-heading">
          <span className="section-label">ABOUT SWAP SKILL</span>

          <h2>
            Learning is better
            <br />
            <span>when it's shared.</span>
          </h2>
        </div>

        <p className="home-intro-text">
          Not everyone needs a classroom to learn. Sometimes, the best teacher
          is another person with a skill you want to learn. Swap Skill helps you
          connect with people, exchange knowledge, and turn your abilities into
          opportunities.
        </p>
      </section>
      {/* Feature Cards */}
      <section className="home-features">
        <div className="home-section-heading centered">
          <span className="section-label">WHY SWAP SKILL?</span>
          <h2>A smarter way to learn</h2>
          <p>Share your knowledge and discover what others can teach you.</p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-number">01</div>
            <h3>Exchange Skills</h3>
            <p>
              Teach a skill you know and learn a different skill from someone
              who has the knowledge you need.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-number">02</div>
            <h3>Discover New Talents</h3>
            <p>
              Explore technology, design, art, communication, and other skills
              shared by the community.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-number">03</div>
            <h3>Grow Together</h3>
            <p>
              Build connections, share experiences, and improve your abilities
              through collaborative learning.
            </p>
          </article>
        </div>
      </section>
      {/* How It Works */}
      <section className="home-how-it-works">
        <div className="home-section-heading centered">
          <span className="section-label">HOW IT WORKS</span>
          <h2>Three simple steps</h2>
          <p>Start your skill-sharing journey with Swap Skill.</p>
        </div>

        <div className="steps-grid">
          <article className="step-card">
            <span>01</span>
            <h3>Explore</h3>
            <p>Browse available skills and find something you want to learn.</p>
          </article>

          <article className="step-card">
            <span>02</span>
            <h3>Share</h3>
            <p>
              Add your own skills and tell the community what you can teach.
            </p>
          </article>

          <article className="step-card">
            <span>03</span>
            <h3>Exchange</h3>
            <p>Connect with other learners and exchange knowledge.</p>
          </article>
        </div>
      </section>
      {/* Call to Action */}
      <section className="home-cta">
        <span className="section-label">YOUR JOURNEY STARTS HERE</span>
        <h2>Know something? Share it.</h2>
        <p>Want to learn something? Find your next skill with Swap Skill.</p>

        <div className="hero-buttons">
          <Link to="/explore" className="cta-primary-btn">
            Start Exploring
          </Link>

          <Link to="/add-skill" className="cta-secondary-btn">
            Add Your Skill
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
