import React from "react";
import h1 from "../assets/h1.png";
import h2 from "../assets/h2.png";
import h3 from "../assets/h3.png";
import h4 from "../assets/h4.png";
import h5 from "../assets/h5.png";
import h6 from "../assets/h6.png";

function WhyChooseNexus() {
  const features = [
    {
      id: 1,
      image: h1,
      title: "Dedicated accountant",
      description: "A qualified accountant will be your main point of contact offering unlimited support for you and your business.",
      alt: "Dedicated accountant"
    },
    {
      id: 2,
      image: h2,
      title: "Quick response",
      description: "All emails and calls will be returned within 24 hours.",
      alt: "Quick response"
    },
    {
      id: 3,
      image: h3,
      title: "Evening & weekends",
      description: "Schedule an appointment for the weekend via Zoom or Microsoft Teams.",
      alt: "Evening & weekends"
    },
    {
      id: 4,
      image: h4,
      title: "Grow your business",
      description: "Our expertise help to optimise your business growth and development.",
      alt: "Grow your business"
    },
    {
      id: 5,
      image: h5,
      title: "Fixed fees",
      description: "Transparent fees charged on a monthly basis therefore avoiding any nasty surprises.",
      alt: "Fixed fees"
    },
    {
      id: 6,
      image: h6,
      title: "Cloud Accounting",
      description: "Choose from one of our industry leading cloud accounting software providers, FreeAgent or Quickbooks.",
      alt: "Cloud Accounting"
    }
  ];

  return (
    <section className="why-choose-nexus">
      <div className="why-choose-container">
        <h2 className="why-choose-title">Why Choose Nexus?</h2>
        
        <div className="why-choose-grid">
          {features.map((feature) => (
            <div key={feature.id} className="why-choose-card">
              <div className="why-choose-image-wrapper">
                <img 
                  src={feature.image} 
                  alt={feature.alt} 
                  className="why-choose-image"
                />
              </div>
              <h3 className="why-choose-card-title">{feature.title}</h3>
              <p className="why-choose-card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseNexus;