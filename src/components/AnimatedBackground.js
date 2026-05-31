import React from "react";
import "../styles/animatedBg.css";

export default function AnimatedBackground() {
  const totalSparks = 55; 

  return (
    <div className="animated-bg-overlay">
      {[...Array(totalSparks)].map((_, i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = 5 + Math.random() * 5;
        const size = 3.0 + Math.random() * 4.0;

        return (
          <span
            key={i}
            className="tiny-spark"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`
            }}
          />
        );
      })}
    </div>
  );
}