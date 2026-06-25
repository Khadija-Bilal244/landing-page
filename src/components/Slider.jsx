import { useEffect, useState } from "react";
import "../styles/Slider.css";

const reviews = [
  {
    name: "Ottoman Coffeehouse",
    stars: "★★★★★",
    text: "Amazing accountant firm, highly recommend wouldn't use anyone else. Very thorough and helped me with all of my accounting needs. The support has been invaluable to our company. Imran's expertise is second to none. We would have no hesitation in recommending him and the team at Nexus Accountant & Taxation."
  },
  {
    name: "Dirtshoo Cleaning Services",
    stars: "★★★★☆",
    text: "I am extremely delighted to write a review about Nexus Accountants & Taxation Limited. The team at Nexus Accountants is highly professional and always meet your expectations. Since time plays a significant role when filing your Tax Returns, Nexus will always take care of it and let you feel in safe hands."
  },
  {
    name: "Easy Goods LTD",
    stars: "★★★★☆",
    text: "I am glad to work with a professional, dedicated and dynamic team. Very knowledgeable regarding all accounting and taxation issues. Always willing to help and guide me in my business. I would highly recommend Nexus accountants and taxation."
  },
  {
    name: "Small Business Client",
    stars: "★★★★★",
    text: "Nexus made our accounts simple and stress free. Their advice was clear, quick and very helpful for our company."
  },
  {
    name: "Tax Return Client",
    stars: "★★★★★",
    text: "Excellent service from start to finish. The team explained everything properly and submitted my tax return on time."
  }
];

function Slider() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((oldIndex) => {
        if (oldIndex === reviews.length - 1) {
          return 0;
        }
        return oldIndex + 1;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      if (oldIndex === reviews.length - 1) {
        return 0;
      }
      return oldIndex + 1;
    });
  };

  const prevSlide = () => {
    setIndex((oldIndex) => {
      if (oldIndex === 0) {
        return reviews.length - 1;
      }
      return oldIndex - 1;
    });
  };

  const visibleReviews = [
    reviews[index],
    reviews[(index + 1) % reviews.length],
    reviews[(index + 2) % reviews.length]
  ];
  const totalDots = reviews.length;

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
            <div className="review-card" key={review.name}>
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

      {/* Dot Indicators */}
      <div className="slider-dots">
        {Array.from({ length: totalDots }).map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;