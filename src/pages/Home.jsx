import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact.jsx";
import ProjectsSection from "../components/ProjectsSection";

function Home() {
  return (

    <div>
      <Navbar />
      <Landing />
      <AboutMe />
      <ProjectsSection />
      <Contact />
    </div>
  );
}

export default Home;
