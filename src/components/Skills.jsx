function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      text: "Python • JavaScript • Java • SQL • C",
    },
    {
      title: "Frontend Development",
      text: "HTML • CSS • React • Vite",
    },
    {
      title: "Tools & Platforms",
      text: "Git • GitHub • VS Code • Jupyter Notebook • Figma • Supabase • Vercel • Cursor",
    },
    {
      title: "Currently Learning",
      text: "Machine Learning • Artificial Intelligence • NLP • FastAPI",
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <p>Skills</p>
        <h2>What I work with and what I’m learning.</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <div key={index} className="skill-card">
            <h3>{group.title}</h3>
            <p>{group.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;