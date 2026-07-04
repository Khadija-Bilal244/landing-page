import React from "react";
import img from "../assets/portfolio.png";
import "../styles/portfolio.css"; 
import descriptionImg from "../assets/summary.jpeg"; 
import descriptionImg2 from "../assets/vision.png";
import descriptionImg3 from "../assets/p1c.png";
import descriptionImg4 from "../assets/p1b.png";
import PortfolioBack from "../common/PortfolioBack/PortfolioBack"; 

const Portfolio = () => {
  return (
    <>
      <section className="portfolio-section mb">
        <PortfolioBack
          title="Our Mission"
          cover={img}
          typedLines={[
            "NEXUS mission is to deliver a portfolio of diversified, specialized, and strategic accounting services for our clients.",
          ]}
        />

        <div className="portfolio-content">
          <img
            src={descriptionImg}
            alt="Description"
            className="portfolio-img"
          />
          <div className="portfolio-text">
            <p>
              At Nexus, we are a London-based firm of accountants dedicated to
              providing comprehensive tax and accounting solutions for
              businesses and individuals. Founded by M. Shahid, who brings over
              a decade of experience as an FD and FC for various international
              businesses, Nexus is committed to empowering clients through
              modern techniques that honor cultural values, helping them achieve
              long-term success. Under Shahid's leadership, the firm has
              exceeded its goals, offering clients peace of mind by managing
              their financial matters and allowing them to focus on business
              growth. Our global expertise spans the UK, EU, Russia, Dubai, and
              the Asian region, ensuring reliable, tailored solutions.
            </p>
          </div>
        </div>

        <div className="portfolio-content second-description">
          <div className="portfolio-text">
            <p>
              NEXUS mission is to deliver a portfolio of diversified,
              specialized, and strategic accounting services for our clients.
              Our team believes in establishing Nexus as a successful company
              that ensures satisfaction, success, and optimal benefits for its
              employees as well as its clients. We are aiming to deliver
              additional services to our clients with a deep-rooted
              relationship.
            </p>
          </div>
          <img
            src={descriptionImg2}
            alt="Description"
            className="portfolio-right-img"
          />
        </div>

        {/* New Section with 12 Points */}
        <div className="portfolio-points">
          <div className="portfolio-section-border2"></div>
          <div className="portfolio-points-intro">
            <p>
              Our range of professional services, delivered by a team of
              friendly, vibrant individuals, empowers business owners to achieve
              their goals by enabling them to focus on what they do best. We
              embrace:
            </p>
          </div>
          <ul className="portfolio-points-list">
            <li>Sincerity</li>
            <li>Excellence</li>
            <li>Education</li>
            <li>Honesty & Integrity</li>
            <li>Referrals</li>
            <li>Team</li>
            <li>Passion</li>
            <li>Proactivity</li>
            <li>Community</li>
            <li>Reliability</li>
            <li>Approachability</li>
            <li>Client Satisfaction</li>
          </ul>
        </div>
        <div className="portfolio-section-border"></div>
        <div className="portfolio-content">
          <img
            src={descriptionImg3}
            alt="Description"
            className="portfolio-img"
          />
          <div className="portfolio-text">
            <p>
              Established in 2018, Nexus Accountants & Taxation Limited is a
              certified firm led by M. Shahid, a seasoned professional with over
              15 years of experience in accounting and finance. Beginning his
              career with a boutique firm in Northwest London while pursuing an
              Honors Degree in Accounting and Finance, M. Shahid swiftly
              advanced to roles such as Financial Director, overseeing
              substantial client portfolios. His expertise extends to managing
              financial operations for commercial entities with turnovers
              exceeding £300 million. After a successful tenure, he founded
              Nexus Accountants & Taxation Limited, dedicated to delivering
              exceptional financial services.
            </p>
          </div>
        </div>
        <div className="portfolio-content second-description">
          <div className="portfolio-text">
            <p>
              The Nexus team consists of nine members, including four fully
              qualified members of the Association of Chartered Accountants and
              a partner who is a Chartered Financial Analyst. The team also
              includes experienced bookkeepers, payroll, and HR managers,
              collectively bringing 25 to 30 years of industry experience.
              Although Nexus Accountants & Taxation Ltd is a small firm, it
              delivers services comparable to medium-sized firms. Clients
              benefit from the extensive knowledge and expertise typically
              offered by larger firms while enjoying a fee structure aligned
              with that of small to medium-sized firms.
            </p>
          </div>
          <img
            src={descriptionImg4}
            alt="Description"
            className="portfolio-right-img"
          />
        </div>
      </section>
    </>
  );
};

export default Portfolio;