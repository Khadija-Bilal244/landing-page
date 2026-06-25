
import aboutImage from "../assets/about.png";
import "../styles/About.css";

function About() {
  return (
    <div className="page-wrapper">
      <div
        className="page-hero about-hero page-hero-image"
        style={{ "--hero-image": `url(${aboutImage})` }}
      >
        <h1>About Nexus Accountants</h1>
        <p>Your trusted partner in financial success</p>
      </div>

      <div className="page-content">
        <div className="about-grid">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Nexus Accountants is a leading accounting firm dedicated to 
              providing exceptional financial services to businesses and individuals.
              With years of experience, we help our clients achieve their financial goals 
              through innovative and personalized solutions.
            </p>

            <div className="mission-section">
              <h3>Our Mission</h3>
              <p>
                NEXUS mission is to deliver a portfolio of diverse and strategic 
                accounting services for our clients. We aim to provide comprehensive 
                financial solutions that drive growth and success.
              </p>
            </div>

            <div className="vision-section">
              <h3>Our Vision</h3>
              <p>
                To become the most trusted accounting partner, known for excellence, 
                integrity, and innovation in financial services.
              </p>
            </div>

            <div className="values-section">
              <h3>Our Core Values</h3>
              <ul className="values-list">
                <li> Integrity & Transparency</li>
                <li>Excellence in Service</li>
                <li> Client-First Approach</li>
                <li> Innovation & Adaptability</li>
                <li> Teamwork & Collaboration</li>
              </ul>
            </div>
          </div>

          <div className="about-image">
            <div className="about-stats">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;