import { useState, useEffect } from "react";
import superiorityImage1 from "../assets/vision1.png";
import superiorityImage2 from "../assets/vision2.png";
import superiorityImage3 from "../assets/vision3.png";

function Superiority() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [superiorityImage1, superiorityImage2, superiorityImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="superiority-section">
      <div className="superiority-container">
        <div className="superiority-wrapper">
          <div className="superiority-text">
            <h2 className="superiority-title">Nexus Superiority Among Others</h2>
            <p>
              At Nexus, we start from the principle that every client is our only client. 
              This is what makes Nexus different from any other firm of Accountants. 
              We believe in continually developing comprehensive and relevant services 
              in all areas of practice so that our clients always get the most informed 
              advice and the best opportunities. We are focusing on becoming a fully 
              digital firm by 2019 and hence we are aiming to deliver additional services 
              to our clients with deep-rooted relationships. We assure you that our 
              services are second to none, and the way we produce reports gives you a 
              full understanding of your business every week and plan your tax affairs 
              accordingly to provide you peace of mind so that you can focus on your 
              business. Tailored accounting for ambitious business. You have a vision 
              for the future of your business. We will help you plan it, develop it, 
              and make it a reality. Business fails to manage their accounts and 
              eventually pay too much taxes or unnecessarily incur fines and interest 
              penalties. We become instrumental in helping businesses with our proactive 
              and innovative approach to overcome these niches and map toward development.
            </p>
          </div>
          <div className="superiority-image">
            <div className="superiority-image-slider">
              <img 
                src={images[currentImageIndex]} 
                alt="Nexus Accountants Superiority" 
                className="superiority-slide-image"
                key={currentImageIndex}
              />
              <div className="superiority-dots">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`superiority-dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => goToImage(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Superiority;