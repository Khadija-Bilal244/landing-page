import React from "react";
import Back from "../services/back-services";
import Heading from "../common/Heading.jsx";
import img from "../assets/services.png";
import "../styles/Services.css";
import FeaturedCard from "../components/WhyChooseNexus.jsx";
import descriptionImg from "../assets/con9.png";
import LogoStrip from "../components/GdprTrusted.jsx";

const Services = () => {
  return (
    <section className="services mb" style={{ padding: 0, margin: 0, width: "100%", maxWidth: "100%" }}>
      <div style={{ width: "100%", maxWidth: "100%", margin: 0, padding: 0 }}>
        <Back
          name="Our Services"
          title="We offer full accounting and financial function help to start-ups and SMEs, saving entrepreneurs money and time."
          cover={img}
        />
      </div>

      <div>
        <FeaturedCard />
      </div>
      
      <div className="description-section-border"></div>
      
      <div className="description">
        <div className="description-content">
          <img
            src={descriptionImg}
            alt="Description"
            className="description-img"
          />
          <div className="description-text">
            <p>
              Nexus Accountants is a business service company. We provide a
              range of Accounting and Financial services to businesses
              throughout the UK. NEXUS mission is to deliver a portfolio of
              diversified, specialized, and strategic accounting services for
              our clients. Our team believes in establishing Nexus as a
              successful company that ensures satisfaction, success, and
              optimal benefits for its employees as well as its clients. To
              create a company where talent, skills, creativity, and
              professionalism thrive, and we translate this into thriving
              businesses of our clients. We want to carve a unique niche for
              our company in the field of accountancy in the UK.
            </p>
          </div>
        </div>
      </div>
      
      <div className="description-section-border"></div>
      
      <div>
        <LogoStrip />
      </div>
      
      {/* Services Section */}
      <div className="services-offered">
        <p>
          At NEXUS, we offer a range of standard accountancy and tax services
          as well as specialized services in the field of accountancy and
          finance. A detailed description of the services offered is as
          follows:
        </p>

        <div className="services-list">
          {/* Existing Services */}
          <div className="service-item">Final Account Services</div>
          <div className="service-item">Financial Modeling</div>
          <div className="service-item">Budget/Forecasting</div>
          <div className="service-item">Mergers & Acquisitions</div>
          <div className="service-item">VAT Returns/Intrastate</div>
          <div className="service-item">Technology Training</div>
          <div className="service-item">Tax Investigations</div>
          <div className="service-item">Models for Internal Control</div>
          <div className="service-item">Bookkeeping/Payroll/Admin</div>
          <div className="service-item">Corporate Planning</div>
          <div className="service-item">Due Diligence</div>
          <div className="service-item">Personal Tax Planning</div>
          <div className="service-item">Business Startups &amp; Financial Planning</div>
          <div className="service-item">Company Secretarial Services</div>
          <div className="service-item">Financial Statements &amp; Compliance</div>
          <div className="service-item">Corporate Tax Returns</div>
          <div className="service-item">Self-Assessment</div>
          <div className="service-item">Management Reporting &amp; Executive Summary</div>
          <div className="service-item">Cash Flow Forecasting</div>
          <div className="service-item">Business Plans</div>
          <div className="service-item">Corporate Structuring</div>
          <div className="service-item">Corporate Tax Planning</div>
          <div className="service-item">Tax Planning for High-Net-Worth Individuals</div>
        </div>
      </div>
    </section>
  );
};

export default Services;