function Journey() {
  const steps = [
    {
      title: "Started with Programming",
      year: "2024 – 2025",
      text: "Began with C programming, HTML and basic website development.",
    },
    {
      title: "Built Technical Foundation",
      year: "2025 – 2026",
      text: "Explored Python, Java, DBMS, 8086 Microprocessor and React projects.",
    },
    {
      title: "Entered AI/ML",
      year: "2026 – 2027",
      text: "Currently focusing on AI, Machine Learning, Algorithms, OS and Advanced DBMS.",
    },
    {
      title: "Building Real Projects",
      year: "Current",
      text: "Working on React, ML and AI-based project ideas while improving through hackathons.",
    },
  ];

  return (
    <section id="journey" className="journey">
      <div className="section-header">
        <p>Journey</p>
        <h2>How my learning is growing.</h2>
      </div>

      <div className="journey-roadmap">
        {steps.map((step, index) => (
          <div className="roadmap-item" key={index}>
            <div className="roadmap-dot">{index + 1}</div>
            <div className="roadmap-content">
              <span>{step.year}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;