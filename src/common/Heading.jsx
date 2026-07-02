
import React from "react";
import "./Heading.css";

const Heading = ({ title }) => {
  return (
    <div className="heading">
      <h2>{title}</h2>
    </div>
  );
};

export default Heading;