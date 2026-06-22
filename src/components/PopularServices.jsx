import React, { useState, useEffect, useRef } from "react";

// Import videos from assets folder
import F1 from "../assets/F1.mp4";
import F2 from "../assets/F2.mp4";
import F3 from "../assets/F3.mp4";
import F4 from "../assets/F4.mp4";
import F5 from "../assets/F5.mp4";
import F6 from "../assets/F6.mp4";
import F7 from "../assets/F7.mp4";
import F8 from "../assets/F8.mp4";
import F9 from "../assets/F9.mp4";

function PopularServices() {
  const servicesData = [
    {
      id: 1,
      video: F1,
      title: "Bookkeeping",
      description: "Our bookkeeping service gives you complete visibility and control over your accounts.",
      category: "Nexus Accountants"
    },
    {
      id: 2,
      video: F2,
      title: "Annual Financial Statements",
      description: "Every business must file annual financial statements to Companies House and HMRC as a legal requirement.",
      category: "HMRC"
    },
    {
      id: 3,
      video: F3,
      title: "Business Start Up and Registration",
      description: "It's important to ensure that your business is set up correctly right from start.",
      category: "Nexus Accountants"
    },
    {
      id: 4,
      video: F4,
      title: "Management Accounts",
      description: "These tailored summaries of your company's financial data are prepared monthly, quarterly and half-yearly so that you can keep up to date about business performance.",
      category: "HMRC"
    },
    {
      id: 5,
      video: F5,
      title: "Payroll and Pension",
      description: "We have a specialist department solely dedicated to your company's payroll and pension management.",
      category: "Nexus Accountants"
    },
    {
      id: 6,
      video: F6,
      title: "Self-Assessment Tax Returns",
      description: "You can be sure that your finances are in safe, strong and reliable hands.",
      category: "HMRC"
    },
    {
      id: 7,
      video: F7,
      title: "Strategic Planning",
      description: "We can help you develop a long term business plan so you can stay in control of your resources and make best use of financial opportunities.",
      category: "Nexus Accountants"
    },
    {
      id: 8,
      video: F8,
      title: "Business Consulting",
      description: "From bookkeeping and tax planning to financial analysis and strategic advice, we bring years of experience and a deep understanding of industry regulations to the table.",
      category: "HMRC"
    },
    {
      id: 9,
      video: F9,
      title: "Value Added Tax (VAT)",
      description: "Based on Bookkeeping records, we can prepare and submit quarterly VAT returns on your behalf.",
      category: "Nexus Accountants"
    }
  ];

  const videoRefs = useRef({});

  useEffect(() => {
    // Auto-play all videos when component mounts
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        video.play().catch((error) => {
          // Autoplay was prevented, user interaction required
          console.log("Autoplay prevented:", error);
        });
      }
    });
  }, []);

  const getCategoryStyle = (category) => {
    if (category === "Nexus Accountants") {
      return { background: "#fff3e0", color: "#ff8a00" };
    } else {
      return { background: "#eafaf1", color: "#22c46a" };
    }
  };

  return (
    <section className="popular-services">
      <div className="container">
        <div className="services-header">
          <h1>Popular Services</h1>
          <p>Supporting Firms Of Accountants.</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card shadow">
              <div className="service-video-wrapper">
                <video
                  ref={(el) => (videoRefs.current[service.id] = el)}
                  src={service.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="service-video"
                />
                {/* Removed overlay and play icon */}
              </div>
              <div className="service-text">
                <div className="service-category">
                  <span style={getCategoryStyle(service.category)}>
                    {service.category}
                  </span>
                  <i className="fa fa-star"></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularServices;
