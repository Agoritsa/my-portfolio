import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiFlutter, SiJavascript } from "react-icons/si";
import cvFile from "../assets/AgoritsaChatzistefanouCV.pdf";

const AboutMe = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m <span className="highlight">Agoritsa</span> — a detail-oriented Web Deleloper with a background in 
            mobile and web app development. I'm passionate about problem-solving, continuous learning and translating complex concepts 
            into practical, user-centered designs. With a keen eye for aesthetics i build modern, responsive websites that fit best
            to the client's needs. For more details on my skills and experience, feel free to download my CV!          
            </p>
          <div className="skills">
            <FaReact title="React" />
            <SiNextdotjs title="Next.js" />
            <FaNodeJs title="Node.js" />
            <SiFlutter title="Flutter" />
            <SiJavascript title="JavaScript" />
            <FaHtml5 title="HTML5" />
            <FaCss3Alt title="CSS3" />
            <FaGithub title="GitHub" />
          </div>
        </div>

        <div className="cv-section">
          <a href={cvFile} download="AgoritsaChatzistefanouCV.pdf" className="download-cv-btn">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;