import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Achievements from "./components/Achievements";
import GitHubOverview from "./components/GitHubOverview";
import CurrentlyWorking from "./components/CurrentlyWorking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Achievements />
      <GitHubOverview />
      <CurrentlyWorking />
      <Contact />
      <Footer />
    </>
  );
}

export default App;