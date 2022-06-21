import React from "react";
import "./PikachuLoaderCss.css";
export default function PikachuLoader() {
  return (
    <div className="containerpikachu">
      <div className="mover">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="Pikachu">
        <div className="loading">
          <img
            src=" https://i.pinimg.com/originals/51/72/56/517256bf41fd027b5eec4a38c5110420.gif"
            alt="Loading"
          />
        </div>
        <div className="mouse original"></div>
      </div>
      <div className="mover">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
