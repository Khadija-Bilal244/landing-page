import React from "react";
import SectorBack from "../common/Sector";
import descriptionImg from "../assets/blog1b.png";
import descriptionImg6 from "../assets/conference.jpeg";
import descriptionImg7 from "../assets/conference1.png";
import descriptionImg8 from "../assets/conference2.png";
import img from "../assets/blog.png";
import parliamentImg from "../assets/parliament.png";
import ottomanFoundersImg from "../assets/ottoman-founders.png"; 
import Heading from "../common/Heading";
import CardBlog from "./CardBlog";
import AnimatedImages from "./AnimatedImages";
import "../styles/Blog.css";

import vlog1 from "../assets/vlog1.mp4";
import vlog2 from "../assets/vlog2.mp4";
import vlog3 from "../assets/vlog3.mp4";
import uniStudentTraining from "../assets/Uni student training.mp4"; 
const valueText = "At our financial management service, we understand the importance of staying on top of your finances. We are here to help you reach your financial goals with professionalism & expertise.";

const Blog = () => {
  return (
    <section className="blog">
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
      <div className="video-section">
        <div className="video-section-border"></div>
        <Heading title="Our Featured Videos" />
        <h2 className="video-description">Our founder had the honour of attending the prestigious Houses of Parliament, Westminster House of Lords, to address key issues faced by businesses in between Pakistan & Great Britain.</h2>
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
          </video>
        </div>
        <div className="video-section-border"></div>
      </div>

      {/* UCP Student Training Section */}
      <section className="student-training-section">
        <div className="student-training-content">
          <video
            src={uniStudentTraining}
            muted
            autoPlay
            loop
            playsInline
            controls
            className="student-training-video"
          >
            <source src={uniStudentTraining} type="video/mp4" />
          </video>
          <div className="student-training-text">
            <h3>UCP Student's Training</h3>
            <p>
              This was University Of Central Punjab student's assistance on their project. We were glad
              to host university students at our office and guide them
              through hands-on training, helping them understand real-world
              accounting and financial practices. Our goal was to support
              their learning and equip them with the practical skills needed
              to successfully complete their project.
            </p>
          </div>
        </div>
      </section>

      {/* Parliament Post Section */}
    
      <section className="parliament-post">
        <div className="parliament-post-card">
          <img
            src={parliamentImg}
            alt="Upper House of Parliament, House of Lords, Westminster, London"
            className="parliament-post-img"
          />
          <div className="parliament-post-info">
            <span className="parliament-post-date">14th July 2023</span>
            <h2 className="parliament-post-heading">
              A Historic Visit to the House of Lords, Westminster
            </h2>
            <p className="parliament-post-desc">
              Our founder represented Pakistani businesses at this landmark gathering in London.
            </p>
          </div>
        </div>
      </section>

      {/* Ottoman Coffeehouse Case Study Section */}
      <section className="ottoman-case-study">
        <div className="ottoman-case-study-card">
          <img
            src={ottomanFoundersImg}
            alt="Founder of Nexus Accountants with the Founder of Ottoman Coffeehouse"
            className="ottoman-case-study-img"
          />
          <div className="ottoman-case-study-info">
            <span className="ottoman-case-study-tag">Client Success Story</span>
            <h2 className="ottoman-case-study-heading">
              Proudly Serving Ottoman Coffeehouse
            </h2>
            <p className="ottoman-case-study-desc">
              M. Shahid, founder of Nexus Accountants, has served as the
              trusted accountant for Ottoman Coffeehouse for several years,
              helping the brand manage its finances as it grew into one of
              the region's most recognized names in specialty coffee.
              We're honoured to support their journey and continue building
              on this long-standing partnership.
            </p>
          </div>
        </div>
      </section>

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
            UK, International Lawyers Club London Annual Conference
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
            <b>M. Shahid highlighted key concerns such as:</b>
            <ul className="room-list">
              <li>Navigating legal and financial complexities abroad.</li>
              <li>
                Facilitating seamless financial management for Pakistanis
                living overseas.
              </li>
              <li>Providing expert guidance on tax planning and compliance.</li>
            </ul>
            <p>
              At Nexus Accountants, we are committed to supporting overseas
              Pakistanis by offering expert financial services.
            </p>
          </div>
        </div>

        <div className="room-content second-description">
          <div className="room-text">
            <b>M. Shahid highlighted key concerns such as:</b>
            <ul className="room-list">
              <li>Navigating legal and financial complexities abroad.</li>
              <li>
                Facilitating seamless financial management for Pakistanis
                living overseas.
              </li>
              <li>Providing expert guidance on tax planning and compliance.</li>
            </ul>
            <p>
              At Nexus Accountants, we are committed to supporting overseas
              Pakistanis by offering expert financial services.
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