
import servicesImage from "../assets/services.png";
import "../styles/Services.css";

function Services() {
  const coreServices = [
    "Final Account Services",
    "Mergers & Acquisitions",
    "Tax Investigations",
    "Corporate Planning",
    "Personal Tax Planning",
    "Financial Modeling"
  ];

  const additionalServices = [
    "Budget/Forecasting",
    "VAT Returns/Intrastate",
    "Technology Training",
    "Models for Internal Control",
    "Bookkeeping/Payroll/Admin",
    "Due Diligence"
  ];

  return (
    <div className="page-wrapper">
      <div
        className="page-hero services-hero page-hero-image"
        style={{ "--hero-image": `url(${servicesImage})` }}
      >
        <h1>Our Services</h1>
        <p>Comprehensive accounting solutions tailored to your needs</p>
      </div>

      <div className="page-content">
        <div className="services-grid">
          <div className="services-column">
            <h2>Core Services</h2>
            <ul>
              {coreServices.map((service, index) => (
                <li key={index}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="services-column">
            <h2>Additional Services</h2>
            <ul>
              {additionalServices.map((service, index) => (
                <li key={index}>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="services-cta">
          <p>We provide tailored services according to your requirements. We aim to work with you to plan your tax affairs, maximize your wealth, and provide you peace of mind.</p>
          <button className="cta-button">Get a Quote</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
