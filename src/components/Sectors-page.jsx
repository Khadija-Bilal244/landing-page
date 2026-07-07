import React from "react";
import SectorBack from "../common/Sector.jsx";
import img from "../assets/glasgow.png";
import "../styles/Sectors-page.css";
import Awards from "../components/ImpactSales.jsx";
import Location from "../components/Sectors.jsx";
import descriptionImg from "../assets/sector.jpeg";
import descriptionImg2 from "../assets/image.jpeg";

const valueText = "To always adopt a virtuous approach to our clients and partners, business to provide an outstanding experience for everyone who deals with us, and to conceive and develop unmatched concepts.";

const Help = () => {
  return (
    <section className="portfolio mb" style={{ padding: 0, margin: 0 }}>
      {/* Hero Section - Full Width */}
      <div style={{ width: "100%", maxWidth: "100%", margin: 0, padding: 0 }}>
        <SectorBack
          title="Our Values"
          cover={img}
          typedLines={[valueText]}
        />
      </div>

      <div className="portfolio-description">
        <div className="portfolio-description-content">
          <img
            src={descriptionImg}
            alt="Description"
            className="portfolio-description-img"
          />
          <div className="portfolio-description-text first-description">
            <p>
             Many of Nexus' clients are small and medium-sized businesses that require expert financial guidance without the cost of employing a full-time Finance Director. We also support growing companies and established organisations, providing tailored accounting, tax, and strategic advisory services that evolve with their needs.
             Our team has extensive experience working with businesses at every stage of their journey from ambitious start-ups to companies generating multi-million-pound turnover. We have supported founders with financial planning, forecasting, and investment-ready modelling, helping businesses secure funding and build strong foundations for sustainable growth.
             We firmly believe that SMEs are the backbone of the UK economy. By providing proactive advice, modern digital accounting solutions, and expert guidance in line with current UK legislation, we help businesses remain compliant, improve performance, and confidently plan for the future. Our success is measured by the long-term growth and achievements of the clients we proudly support.
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <Awards />
      </div>
      
      <div className="portfolio-description second-description">
        <div className="portfolio-description-content">
          <div className="portfolio-description-text">
            <p>
              Nexus primarily supports small and medium-sized businesses across a wide range of industries, including many family-owned enterprises. While these businesses are experts in their own fields, they often benefit from experienced financial guidance to support growth, improve cash flow, manage costs, and adapt to changing market conditions. Our practical advice and tailored accounting solutions help businesses make confident decisions while remaining compliant with current UK tax and regulatory requirements.
              We also work closely with businesses, entrepreneurs, and investors, providing strategic advice on business acquisitions, investments, and wealth management. Whether a transaction is financed through equity, debt, or a combination of both, we help structure it in a commercially sound and tax-efficient manner, ensuring compliance with UK legislation while supporting long-term financial success and sustainable returns.
            </p>
          </div>
          <img
            src={descriptionImg2}
            alt="Description"
            className="right-image"
          />
        </div>
      </div>

      <div>
        <Location />
      </div>
    </section>
  );
};

export default Help;