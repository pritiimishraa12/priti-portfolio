function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Ms Priti Mishra</div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#journey">Journey</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
      </div>

      <button className="resume-btn" disabled>
  Resume Coming Soon
</button>
    </nav>
  );
}

export default Navbar;