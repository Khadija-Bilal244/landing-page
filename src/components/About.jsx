//About.jsx
import React, { useState } from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../assets/about.jpeg";
import Img6 from "../assets/story.jpeg";
import { FaStar } from "react-icons/fa"; 
import "../styles/About.css";

const About = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const whyItems = [
    {
      title: "RIGHT SERVICES AT RIGHT TIME",
      content:
        "We aim to finalize VAT Returns within two weeks after the period ends so that you have three weeks to manage your cash flow for the VAT payments. Similarly, we aim to prepare Sinancial Statements, Corporation Tax Return and Self-Assessment within two months after the year end so that you have sufficient time to manage your business cash flow for the payment of Tax liabilities.",
    },
    {
      title: "TIMELY RESPONSE",
      content:
        "We try to respond and resolve your telephonic and email enquiries as quickly as possible. Our goal is to establish long term trusted relationships, where the 'value-add truly comes from a thorough understanding of your organisation.",
    },
    {
      title: "EFFICIENT TAX ADVICE",
      content:
        "We advise our clients with the most tax-efficient structure of the business and make sure you as a combination of your business and individual pay the least tax.",
    },
    {
      title: "CHANGE IN TAX LAWS",
      content:
        "If there is any change in tax law, we immediately communicate our client about the effect of changes to them.",
    },
    {
      title: "COST-EFFECTIVE SERVICES (VALUE FOR MONEY)",
      content:
        "We charge our fee based on the services provided and time spent form each client. We believe that long-term trusted relationships are only formed through delivering to our promises, the first time and every time- then by outperforming your expectations of the value our services provide.",
    },
    {
      title: "CORPORATE SOCIAL RESPONSIBILITY PAPERLESS BOOKKEEPING",
      content:
        "We adhere to the speed of technology. The world is moving towards paperless bookkeeping and hence we have adopted new technology and have gone cloud-based firm to deliver services to make life easy for our clientele too. We aim to deliver Sustainable solutions; we care for the environment by reusing and recycling products and taking part in social welfare activities.",
    },
    {
      title: "WHAT MAKES US DIFFERENT FROM OTHERS",
      content:
        "We treat every client as our only client. This philosophy makes our team members to give comprehensive attention to every client we have on board.",
    },
    {
      title: "PROFESSIONAL EXCELLENCE",
      content:
        "We have derived our motivation from professional excellence which wetry our best to achieve in each job.",
    },
  ];

  return (
    <>
      <section className="about">
        <Back
          name="Nexus Accountants & Taxation Ltd"
          title="About Us - Who We Are?"
          cover={img}
        />
        <div className="about-section-border"></div>
        <h2 className="about-heading">Our Firm Story</h2>
        <div className="about-content second-description">
          <div className="about-text">
            <p>
              <b>Check out our company story and work process:</b>
              <br />
              At Nexus, we treat every client as if they are our only
              client—this is the foundation of what sets us apart. This
              client-first approach has driven Nexus to become one of the
              fastest-growing firms in the industry. Our commitment lies in
              continuously evolving our services across all areas of practice,
              ensuring that our clients receive not only expert advice but also
              the best opportunities tailored to their needs.
            </p>
            <p>
              {" "}
              At Nexus, we provide a comprehensive range of standard accountancy
              and tax services, alongside specialized solutions in accountancy
              and finance. Our team of dedicated professionals works closely
              with you to customize your accounting needs, helping you define
              your vision, set achievable goals, and turn them into reality.
            </p>
          </div>
          <img src={Img6} alt="Description" className="about-right-img" />
        </div>
        <div className="about-section-border"></div>
        {/* New Section */}
        <div className="why-right-section">
          <Heading title="Why We Are Right Accountants for Your Business" />
          <div className="why-right-content">
            {whyItems.map((item, index) => (
              <div
                key={index}
                className={`why-item ${
                  expandedItem === index ? "expanded" : ""
                }`}
                onClick={() => toggleExpand(index)}
              >
                <FaStar className="star-icon" />
                <h3>{item.title}</h3>
                <p>
                  {expandedItem === index
                    ? item.content
                    : item.content.substring(0, 100) + "..."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;