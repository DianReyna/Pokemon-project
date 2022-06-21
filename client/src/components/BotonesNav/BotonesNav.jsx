import { Link } from "react-router-dom";
import "./BotonesNavCss.css";

export default function BotonesNav() {
  return (
    <div className="container">
      <div className="nav">
        <div className="home">
          <Link to="/home">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png"
              alt="logo_pokemon"
            />
          </Link>
        </div>

        <div className="create">
          <Link to="/create">
            <button className="button">Create</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
