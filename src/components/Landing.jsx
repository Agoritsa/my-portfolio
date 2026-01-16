import profilePic from "../assets/react_profile.jpg";

function Landing() {
  
  return (
    <section id="landing" className="custom-landing-section">

      <div className="landing-pic">
        <img src={profilePic} alt="Agoritsa" className="landing-profile-pic" />
      </div>

      <h1 className="custom-landing-title">
        Welcome, I’m <span className="custom-landing-highlight">Agoritsa</span>
      </h1>

      <h2 className="custom-landing-subtitle">
        Web Developer | Ionian University Graduate
      </h2>

      <p className="custom-landing-desc">
        I build modern, fast and responsive web experiences with clean design principles
      </p>

      <div className="custom-landing-links">
        <a href="#projects" className="custom-landing-btn primary">
          View My Work
        </a>
        <a href="#contact" className="custom-landing-btn secondary">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Landing;