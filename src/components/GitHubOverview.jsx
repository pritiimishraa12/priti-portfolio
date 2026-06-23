function GitHubOverview() {
  return (
    <section className="github-overview">
      <div className="section-header">
        <p>GitHub Overview</p>
        <h2>Proof that I keep building.</h2>
      </div>

      <div className="github-list">
        <div><strong>84 GitHub Contributions</strong><span>Across projects and learning activity.</span></div>
        <div><strong>5+ Hackathons</strong><span>Project building, teamwork and presentations.</span></div>
        <div><strong>3 Active Projects</strong><span>React, Python and AI/ML focused projects.</span></div>
        <div><strong>React • AI/ML • Python</strong><span>Current technical focus areas.</span></div>
      </div>

      <a
        className="github-profile-link"
        href="https://github.com/pritiimishraa12"
        target="_blank"
        rel="noreferrer"
      >
        View GitHub Profile
      </a>
    </section>
  );
}

export default GitHubOverview;