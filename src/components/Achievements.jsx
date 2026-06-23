function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="section-header">
        <p>Achievements</p>
        <h2>Real progress, not just certificates.</h2>
      </div>

      <div className="achievement-grid">
        <div className="achievement-card">
          <h3>5+ Hackathons</h3>
          <p>Participated in hackathons involving ideas, teamwork, presentations and project building.</p>
        </div>

        <div className="achievement-card">
          <h3>North & Noble Deployed</h3>
          <p>Built and deployed a React-based luxury fashion homepage using GitHub and Vercel.</p>
        </div>

        <div className="achievement-card">
          <h3>Machine Learning Project</h3>
          <p>Working on an exam question prediction system using Python, NLP and ML concepts.</p>
        </div>

        <div className="achievement-card">
          <h3>Consistent Builder</h3>
          <p>Actively learning React, Python, AI/ML and modern development tools through projects.</p>
        </div>
      </div>
    </section>
  );
}

export default Achievements;