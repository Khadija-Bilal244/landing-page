import { useEffect, useState, useCallback } from "react";
import "../styles/Slider.css";

const reviews = [
  {
    name: "Ottoman Coffeehouse",
    stars: "★★★★★",
    text: "Amazing accountant firm, highly recommend wouldn't use anyone else. Very thorough and helped me with all of my accounting needs. The support has been invaluable to our company. Imran's expertise is second to none. We would have no hesitation in recommending him and the team at Nexus Accountant & Taxation."
  },
  {
    name: "Easy Goods LTD",
    stars: "★★★★★",
    text: "I am glad to work with a professional, dedicated and dynamic team. Very knowledgeable regarding all accounting and taxation issues. Always willing to help and guide me in my business. I would highly recommend Nexus accountants and taxation."
  },
  {
    name: "Abubakr Akhtar",
    stars: "★★★★★",
    text: "Professionals at their work, would highly recommend."
  },
  {
    name: "Asim Rehman",
    stars: "★★★★★",
    text: "Quick response and excellent service. I will recommend to use their services."
  },
  {
    name: "Theo Manolachi",
    stars: "★★★★★",
    text: "Absolutely amazing experience: each calculation explained in context, very good communication on different channels. Highly professional team."
  },
  {
    name: "Shoaib Khalid",
    stars: "★★★★★",
    text: "Your team has been exceptional in handling financial matters. From expert tax advice to efficient bookkeeping, I appreciate your professionalism and dedication. You've made the process stress-free, and I highly recommend your services to others seeking reliable financial expertise. Keep up the excellent work!"
  },
  {
    name: "Roshi Khalid",
    stars: "★★★★★",
    text: "I have had the pleasure of commending my financial matters to Nexus Accountant & Taxation, and I am absolutely exhilarated with the level of service and expertise they have consistently provided. Nexus goes above and beyond in every aspect."
  },
  {
    name: "Ali Akhtar",
    stars: "★★★★★",
    text: "Got personal tax return done — great team, excellent service. Recommend their assistance with all tax affairs. Getting my ltd company set up through them and accountancy work. Can't recommend enough."
  },
  {
    name: "Rasheed Sarpong",
    stars: "★★★★★",
    text: "Professional, personable, perfectionists and quite excellent. The staff are a credit to the company and their customer care is of a very high order."
  },
  {
    name: "Danish Ansari",
    stars: "★★★★★",
    text: "Excellent service, prompt communication. Any queries and requests responded to immediately. Professional advice on taxation matters. One of the best there is."
  },
  {
    name: "Gabriel de-Vere",
    stars: "★★★★★",
    text: "Been working with Imran since 2012 and he is an absolute brilliant and great accountant! Can not recommend enough!"
  },
  {
    name: "OUATG Limited",
    stars: "★★★★★",
    text: "Excellent service, very open and professional."
  },
  {
    name: "Sadaf Shaheen",
    stars: "★★★★★",
    text: "Professional team and quick response. I will recommend their service."
  },
  {
    name: "Aamir Zaib",
    stars: "★★★★★",
    text: "Very professional, helpful and amazing understanding of our business and reporting."
  },
  {
    name: "Zaheer Babar",
    stars: "★★★★★",
    text: "Very satisfied with the services, professionally dealt with. Highly Recommended."
  }
];

function Slider() {
  const [index, setIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [index, nextSlide]);

  const getVisibleReviews = () => {
    const isMobile = window.innerWidth <= 768;
    const count = isMobile ? 1 : 3;
    const visible = [];
    for (let i = 0; i < count; i++) {
      const reviewIndex = (index + i) % reviews.length;
      visible.push({ ...reviews[reviewIndex], slot: i });
    }
    return visible;
  };

  const [visibleReviews, setVisibleReviews] = useState(getVisibleReviews());

  useEffect(() => {
    const handleResize = () => {
      setVisibleReviews(getVisibleReviews());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [index]);

  useEffect(() => {
    setVisibleReviews(getVisibleReviews());
  }, [index]);

  return (
    <div className="slider">
      <h2>Don't just take our words for it - Take theirs!</h2>
      <div className="slider-line"></div>

      <div className="slider-wrapper">
        <button className="slider-btn prev-btn" onClick={prevSlide}>
          ‹
        </button>

        <div className="review-list">
          {visibleReviews.map((review) => (
            <div className="review-card" key={review.slot}>
              <h3>
                {review.name} <span>{review.stars}</span>
              </h3>
              <hr />
              <p>{review.text}</p>
            </div>
          ))}
        </div>

        <button className="slider-btn next-btn" onClick={nextSlide}>
          ›
        </button>
      </div>

      <div className="slider-dots">
        {reviews.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;