
import portfolioImage from "../assets/portfolio.png";
import "../styles/Portfolio.css";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Financial Restructuring for Tech Startup",
      category: "Corporate Planning",
      description: "Complete financial restructuring and planning for a growing tech company."
    },
    {
      id: 2,
      title: "Merger & Acquisition Advisory",
      category: "M&A",
      description: "Strategic advisory services for a successful merger between two leading firms."
    },
    {
      id: 3,
      title: "Tax Optimization Strategy",
      category: "Tax Planning",
      description: "Comprehensive tax planning strategy for a multi-national corporation."
    },
    {
      id: 4,
      title: "Budget Forecasting System",
      category: "Forecasting",
      description: "Implementation of advanced budget forecasting system for a retail chain."
    },
    {
      id: 5,
      title: "VAT Compliance Solution",
      category: "VAT",
      description: "Complete VAT compliance and reporting solution for a logistics company."
    },
    {
      id: 6,
      title: "Financial Modeling & Analysis",
      category: "Financial Modeling",
      description: "Complex financial modeling and analysis for investment decisions."
    }
  ];

  return (
    <div className="page-wrapper">
      <div
        className="page-hero portfolio-hero page-hero-image"
        style={{ "--hero-image": `url(${portfolioImage})` }}
      >
        <h1>Our Portfolio</h1>
        <p>Showcasing our successful projects and client partnerships</p>
      </div>

      <div className="page-content">
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-category">{project.category}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="portfolio-btn">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
