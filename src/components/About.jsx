function About() {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <p>About Me</p>
        <h2>Not an expert yet. But always building.</h2>
      </div>

      <div className="about-layout">
        <div className="about-story">
          <p>
            I started my journey with simple programs and basic web pages.
            Over time, curiosity pushed me toward Python, React, Artificial
            Intelligence, Machine Learning and project-based learning.
          </p>

          <p>
            What excites me most is building things from scratch, participating
            in hackathons, presenting ideas and learning through real-world
            challenges.
          </p>

          <p>
            For me, technology is not only about writing code. It is about
            solving problems, improving continuously and turning ideas into
            something useful.
          </p>
        </div>

        <div className="about-highlights">
          <div><span>Education</span><strong>Diploma Student (AI/ML)</strong></div>
          <div><span>Current Focus</span><strong>React • Python • Machine Learning</strong></div>
          <div><span>Experience</span><strong>5+ Hackathons & Presentations</strong></div>
          <div><span>Location</span><strong>India</strong></div>
          <div><span>Mindset</span><strong>Curious • Consistent • Practical</strong></div>
          <div><span>Approach</span><strong>Discipline • Learn • Build</strong></div>
        </div>
      </div>
    </section>
  );
}

export default About;