import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../index.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Find me here ✨</h2>

      <p className="contact-text">
        I’m always open to collaboration, job opportunities or just a friendly chat about
        web development and design! Feel free to reach out via email or connect with me on Linkedin and GitHub
      </p>

      <div className="contact-icons">
        <a href="mailto:agoritsa2002@gmail.com" className="contact-icon">
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/Agoritsa/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/agoritsa-chatzistefanou/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contact