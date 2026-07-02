import React from "react";
import { list1 } from "../data/Data.jsx";

const CardBlog = () => {
  return (
    <>
      <div className="content grid3 mtop">
        {list1.map((val, index) => {
          const { id, href, cover, category, location, name } = val;

          // Define styles dynamically based on ID
          const categoryStyle = {
            background: [1, 3, 5].includes(id)
              ? "#e3f2fd" // Light blue background for IDs 1, 3, 5
              : "#fce4ec", // Light pink background for IDs 2, 4, 6
            color: [1, 3, 5].includes(id)
              ? "#25b579" // Green text for IDs 1, 3, 5
              : "#ff9800", // Orange text for IDs 2, 4, 6
          };

          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt={name} />
              </div>
              <div className="text">
                <div className="category flex">
                  <span style={categoryStyle}>{category}</span>
                  <i className="fa fa-star"></i>
                </div>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <h4>{name}</h4>
                </a>
                <hr />
                <h7>{location}</h7>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardBlog;