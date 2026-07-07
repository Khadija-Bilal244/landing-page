import React from "react";
import SectorBack from "../common/Sector";
import descriptionImg from "../assets/blog1b.png";
import descriptionImg6 from "../assets/conference.jpeg";
import descriptionImg7 from "../assets/conference1.png";
import descriptionImg8 from "../assets/conference2.png";
import img from "../assets/london.png";
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
              Effective accounting is the foundation of sustainable business growth. It provides a clear understanding of your financial performance, helping you manage cash flow, control costs, plan budgets, and make informed business decisions with confidence. Accurate financial reporting also supports tax efficiency, compliance with current UK legislation, and better preparation for future opportunities.
              At Nexus, we transform financial data into practical insights that help businesses improve profitability, optimise resources, secure funding where required, and achieve long-term success. By combining expert advice with proactive planning, we help you focus on growing your business while maintaining strong financial control.
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
            <p>M. Shahid discussed the practical challenges often encountered by British Pakistanis and overseas Pakistanis when managing their UK financial affairs, including:</p>
            <ul className="room-list">
              <li>Meeting UK accounting and taxation obligations.</li>
              <li>Maintaining accurate financial records and statutory compliance.</li>
              <li>Planning tax affairs efficiently within the framework of UK legislation.</li>
              <li>Receiving reliable professional advice to support business growth and financial decision-making.</li>
            </ul>
            <p>Nexus Accountants & Taxation Limited provides professional accountancy, taxation, payroll, bookkeeping, and business advisory services to individuals and businesses across the UK, including clients with international connections. Our advice is delivered in accordance with UK legislation and professional standards, helping clients remain compliant while planning for long-term success.</p>
          </div>
        </div>

        <div className="room-content second-description">
          <div className="room-text">
            <b>M. Shahid highlighted key concerns such as:</b>
            <p>M. Shahid emphasised the importance of strong governance and sound financial leadership for businesses operating in today's evolving economic environment, including:</p>
            <ul className="room-list">
              <li>Building robust financial systems and internal controls.</li>
              <li>Ensuring compliance with UK accounting and taxation legislation.</li>
              <li>Using timely financial information to support strategic decision-making.</li>
              <li>Promoting sustainable business growth through effective financial planning and risk management.</li>
            </ul>
            <p>At Nexus Accountants & Taxation Limited, we work closely with business owners to deliver practical accountancy, taxation, and advisory services that strengthen financial performance, support compliance, and provide the insight needed to make informed commercial decisions.</p>
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