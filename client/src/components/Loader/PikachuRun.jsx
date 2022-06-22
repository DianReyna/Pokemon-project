import React from "react";
import "./PikachuRunCss.css";
export default function PikachuRun() {
  return (
    <div className="containerpikachu">
      <div className="poke_container">
        <div className="pokeball  ball">
          <div className="pokeball_part_bottom"></div>
          <div className="pokeball_shadow  ball"></div>
          <div className="belt"></div>
          <div className="belt_loop"></div>
          <div className="belt_bg"></div>
          <div className="belt_loop_inside"></div>
          <div className="belt_loop_button"></div>
          <div className="pokeball_light"></div>
        </div>
        <div className="pokeball_ground_shadow ball"></div>
      </div>

      <div className="Pikachu">
        <div className="loading">
          <img
            src=" https://www.gifss.com/comics/pokemon/images/gif-pokemon-21.gif"
            alt="Loading"
          />
        </div>
        <div className="mouse original"></div>
      </div>
    </div>
  );
}
