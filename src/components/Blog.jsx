import React from "react";
import SectorBack from "../common/Sector.jsx";
import descriptionImg from "../assets/blog1a.png";
import descriptionImg6 from "../assets/conference.jpeg";
import descriptionImg7 from "../assets/conference1.png";
import descriptionImg8 from "../assets/conference2.png";
import img from "../assets/blog.png";
import Heading from "../common/Heading";
import CardBlog from "./CardBlog";
import AnimatedImages from "./AnimatedImages";
import "../styles/Blog.css";

import vlog1 from "../assets/vlog1.mp4";
import vlog2 from "../assets/vlog2.mp4";
import vlog3 from "../assets/vlog3.mp4";

const valueText="At our financial management service, we understand the importance of staying on top of your finances. We are here to help you reach your financial goals with professionalism & expertise."
const Blog = () => {
  return (
    <section className="blog mb" style={{ padding: 0, margin: 0, width: "100%", maxWidth: "100%" }}>
       <div style={{ width: "100%", maxWidth: "100%", margin: 0, padding: 0 }}>
        <SectorBack
          title="Grow your business with us"
          cover={img}
          typedLines={[valueText]}
        />
      </div>

      <div className="blog-description">
        <div className="blog-description-content">
          <img
            src={descriptionImg}
            alt="Description"
            className="blog-description-img"
          />
          <div className="blog-description-text first-description">
            <p>
              Accounting contributes to financial growth by providing clarity
              on a business's financial health, enabling effective budgeting,
              controlling costs, optimizing capital, ensuring tax efficiency,
              attracting funding, monitoring key performance indicators,
              ensuring compliance, managing cash flow, and guiding strategic
              decision-making. It serves as a crucial tool for informed
              decision-making and resource allocation, ultimately driving
              business expansion and profitability.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <div className="video-section-border"></div>
        <Heading title="Our Featured Videos" />
        <div className="video-container">
          <video
            src={vlog1}
            muted
            autoPlay
            loop
            playsInline
            className="video-item"
          >
            <source src={vlog1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            src={vlog2}
            muted
            autoPlay
            loop
            playsInline
            className="video-item"
          >
            <source src={vlog2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            src={vlog3}
            muted
            autoPlay
            loop
            playsInline
            className="video-item"
          >
            <source src={vlog3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-section-border"></div>
      </div>

      {/* Blog Cards Section */}
      <div className="container">
        <Heading
          title="Our Featured Blogs"
          subtitle="Focused on Your Growth & Committed to Your Peace of Mind"
        />
        <CardBlog />
      </div>

      {/* Conference Section */}
      <section className="conference-section">
        <div className="conference-section-border"></div>
        
        <div className="conference-image-container">
          <img
            src={descriptionImg6}
            alt="UK Lawyers Club"
            className="conference-cover-img"
          />
          <h1 className="conference-heading">
            UK, International Lawyers Club London Annual Conference 2024
          </h1>
        </div>
        
        <div className="conference-section-border"></div>

        <div className="room-content">
          <img
            src={descriptionImg7}
            alt="Conference Details"
            className="room-img"
          />
          <div className="room-text">
            <p>
              <b>
                Nexus Accountants Founder Attended UK International Lawyers
                Club London Annual Conference 2024
              </b>
              <br />
              In July 2024, our esteemed founder, M. Shahid, was invited to
              the prestigious UK International Lawyers Club to participate in
              a vital discussion addressing the challenges faced by overseas
              Pakistanis. The event brought together leading professionals
              from various sectors to explore practical solutions for these
              challenges and to emphasize the role of international
              professionals in assisting overseas Pakistanis.
            </p>
          </div>
        </div>
        
        <div className="room-content second-description">
          <div className="room-text">
            <p>
              <b>M. Shahid highlighted key concerns such as:</b>
              <br />
              <li> Navigating legal and financial complexities abroad.</li>
              <li>
                Facilitating seamless financial management for Pakistanis
                living overseas.
              </li>
              <li>
                Providing expert guidance on tax planning and compliance.
              </li>
              At Nexus Accountants, we are committed to supporting overseas
              Pakistanis by offering expert financial services that simplify
              their lives and empower them to thrive both locally and
              internationally.
            </p>
          </div>
          <img
            src={descriptionImg8}
            alt="Description"
            className="room-right-img"
          />
        </div>
      </section>
      
      <AnimatedImages />
    </section>
  );
};

export default Blog;