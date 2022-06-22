import React from "react";
import "./PikachuLoaderCss.css";
export default function PikachuLoader() {
  return (
    <div className="containerpika">
      <div className="PikachuBack">
        <div className="pikaloading">
          <img
            className="imgpika"
            src=" https://i.pinimg.com/originals/51/72/56/517256bf41fd027b5eec4a38c5110420.gif"
            alt="Loading"
          />
        </div>
        <div className="mouse original"></div>
      </div>
    </div>
  );
}
