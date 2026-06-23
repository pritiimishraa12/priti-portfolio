import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="eyebrow">AI/ML Student • React Developer • Python Learner</p>

        <h1>Priti Mishra</h1>

        <h2>I learn by building.</h2>

        <p className="hero-description">
          From React websites to AI/ML projects, I enjoy turning ideas into
          working products. I’m currently focused on Python, React, Machine
          Learning, hackathons and practical project development.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">View Projects</a>
          <a href="#contact" className="secondary-btn">Let’s Connect</a>
        </div>
      </div>

      <div className="hero-visual">
        <img src={profile} alt="Priti Mishra" />
      </div>
    </section>
  );
}

export default Hero;