import React from "react";
import "./default-content.css";

const DefaultContent = () => {
  return (
    <div className="default-content">
      <img
        src="/images/ganapathi.jpg"
        alt="Ganapathi"
        className="ganapathi-image"
      />
      <p className="ganapathi-text">Om Maha Ganadhipataye Namah</p>
    </div>
  );
};

export default DefaultContent;
