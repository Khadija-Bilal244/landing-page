
import sectorsImage from "../assets/whowehelp-sectors.png";
import "../styles/Sectors.css";

function Sectors() {
  const sectors = [
    {
      name: "Retail & E-commerce",
      description: "Specialized accounting solutions for retail businesses and online stores.",
    },
    {
      name: "Technology & IT",
      description: "Comprehensive financial services for tech companies and startups.",
    },
    {
      name: "Healthcare",
      description: "Tailored accounting for medical practices and healthcare providers.",

    },
    {
      name: "Real Estate",
      description: "Expert financial guidance for property developers and investors.",
    
    },
    {
      name: "Manufacturing",
      description: "Cost-effective accounting solutions for manufacturing businesses.",
    },
    {
      name: "Professional Services",
      description: "Specialized accounting for legal, consulting, and professional firms.",
   
    }
  ];

  return (
    <div className="page-wrapper">
      <div
        className="page-hero sectors-hero page-hero-image"
        style={{ "--hero-image": `url(${sectorsImage})` }}
      >
        <h1>Our Sectors</h1>
        <p>Industry-specific accounting solutions tailored to your needs</p>
      </div>

      <div className="page-content">
        <div className="sectors-grid">
          {sectors.map((sector, index) => (
            <div key={index} className="sector-card">
              <div className="sector-icon">{sector.icon}</div>
              <h3>{sector.name}</h3>
              <p>{sector.description}</p>
            </div>
          ))}
        </div>

        <div className="sectors-cta">
          <h2>Ready to work with us?</h2>
          <p>Contact us today to discuss your industry-specific needs</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Sectors;
