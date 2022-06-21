import React from "react";
import { Link } from "react-router-dom";
import Landing from "./LandinCss.module.css";

export default function LandingPage() {
  return (
    <header>
      <div className={Landing.container}>
        <h1 className={Landing.heading}>Welcome to</h1>
        <div>
          <img
            className={Landing.logo}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png"
            alt="logo"
          />
        </div>

        <div>
          <Link to="/home">
            <div>
              <button className={Landing.cta}>
                <span>Let's go</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </div>
          </Link>
        </div>

        <div className={Landing.divpikachu}>
          <img
            className={Landing.pikachu}
            src="http://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035 "
            alt="pikachu"
          />
        </div>
      </div>
    </header>
  );
}
