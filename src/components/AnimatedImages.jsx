import React, { useEffect, useRef } from "react";
import "../styles/animate.css";

import con1 from "../assets/con1.jpeg";
import con5 from "../assets/con2.jpeg";
import con3 from "../assets/con3.jpeg";
import con4 from "../assets/con4.jpg";
import con2 from "../assets/con5.jpeg";
import con6 from "../assets/con6.jpeg";

const imageData = [
  {
    src: con1,
    title: "International Lawyers Club Annual Conference",
    location: "London, UK",
  },
  {
    src: con2,
    title: "International Lawyers Club Annual Conference",
    location: "London, UK",
  },
  { src: con3, title: "King Cross", location: "Kings Cross, London" },
  {
    src: con4,
    title:
      "Our founder had the honour of attending the prestigious Houses of Parliament, Westminster House of Lords, to address key issues faced by businesses in between Pakistan & Great Britain.",
    location: "HOUSE OF LORDS , WESTMINSTER, LONDON UNITED KINGDOM",
  },
  {
    src: con5,
    title: "International Lawyers Club Annual Conference",
    location: "London, UK",
  },
  {
    src: con6,
    title: "Wileyfox Europe Limited",
    location: "Park Lane, London UK",
  },
];

const AnimatedImages = () => {
  const containerRefs = useRef([]);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for smoother performance
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        containerRefs.current.forEach((container) => {
          if (container) {
            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Image becomes visible when it enters the viewport
            // and stays visible until it's completely out of view
            const isVisible = rect.top < windowHeight + 100 && rect.bottom > -100;
            
            // Add a small delay for smoother transition
            if (isVisible) {
              container.classList.remove('hidden');
              container.classList.add('visible');
            } else {
              container.classList.remove('visible');
              container.classList.add('hidden');
            }
          }
        });
      });
    };

    // Initial check after mount
    setTimeout(handleScroll, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="animated-images" style={{ overflow: "hidden" }}>
      {imageData.map((image, index) => (
        <div
          ref={(el) => (containerRefs.current[index] = el)}
          className="animated-image-container"
          key={index}
        >
          <img
            src={image.src}
            alt={`Image ${index + 1}`}
            className="animated-image"
            loading="lazy"
          />
          <div className="overlay">
            <div className="overlay-text">
              <h3>{image.title}</h3>
              <p>{image.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedImages;