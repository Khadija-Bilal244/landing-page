// Back.jsx
import React from "react";
import "./Back.css";

const Back = ({ name, title, cover }) => {
  return (
    <div className="back">
      <img src={cover} alt={title} className="back-img" />
      <div className="back-overlay">
        <h4 className="back-name">{name}</h4>
        <h1 className="back-title">{title}</h1>
      </div>
    </div>
  );
};

export default Back;