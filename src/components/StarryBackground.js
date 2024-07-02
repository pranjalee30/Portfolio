// src/components/StarryBackground.js
import React from "react";
import "./StarryBackground.css";

const StarryBackground = () => {
  const stars = [...Array(100)].map((_, i) => {
    const style = {
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 2 + 1}px`,
      height: `${Math.random() * 2 + 1}px`,
      animationDuration: `${Math.random() * 5 + 5}s`,
      opacity: `${Math.random() * 0.5 + 0.5}`,
    };
    return <div className="star" style={style} key={i} />;
  });

  return <div className="background">{stars}</div>;
};

export default StarryBackground;
