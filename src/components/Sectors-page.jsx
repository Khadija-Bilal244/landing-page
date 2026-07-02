import React from "react";
import SectorBack from "../common/Sector.jsx";
import img from "../assets/whowehelp-sectors.png";
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
              Customers of Nexus have in the past tended to be small
              businesses. Businesses large enough to require proper expertise
              in finance and accounting but not big enough to be able to
              afford a full-time Finance Director. We at Nexus have the
              experience and expertise to assist any kind of business of any
              size. M Shahid has served Unicorns as well for their modelling
              purposes to get funding from various investors during the first
              year of trade which is considered one of the major leads for
              Nexus. Our main clients have been companies with Turnover over
              £6 million. We have had businesses that were mere start-ups and
              within no time they established now are classified as
              medium-sized companies. We believe that the Small Enterprises
              Sector plays a pivotal role in the overall economy of this
              country. It is estimated that in the EU, SMEs account for 99% of
              business numbers and 40 to 50% of the GDP. We strongly believe
              that it is the Small Businesses that will pave the way for
              recovery in the economy in 2019 and 2020.
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
              Nexus primarily serves small businesses, particularly those in
              the services sector, many of which are family-owned. These
              businesses excel in their fields but often lack the financial
              expertise needed for strategic planning, whether it's navigating
              growth or managing costs during challenging times such as a
              recession. Nexus provides the necessary tools to support
              businesses through these tough periods. In addition to small
              businesses, Nexus also serves High-Net-Worth individuals,
              helping them acquire businesses and assets at unprecedented
              values. Whether these acquisitions involve equity or debt, we
              are in a unique period where individuals and companies with
              substantial cash reserves are seizing opportunities to make
              significant returns on assets purchased at current values.
              Structuring these acquisitions in a well-planned, tax-efficient
              way is critical for maximizing future returns.
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