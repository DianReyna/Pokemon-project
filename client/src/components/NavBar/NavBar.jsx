import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./Nav.modules.css";

export default function NavBar() {
  return (
    <div className="container">
      <div className="nav">
        <div className="homE">
          <Link to="/home">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png"
              alt="logo_pokemon"
            />
          </Link>
        </div>
        <div className="serch">
          <SearchBar />
        </div>
        <div className="create">
          <Link to="/create">
            <button className="button">Create</button>
          </Link>
        </div>
        <div className="about">
          <Link to="/about">
            <button className="btn_about">
              <img
                className="imgi"
                src="https://static.vecteezy.com/system/resources/thumbnails/000/381/025/small/Basic_Elements__28181_29.jpg"
                alt="i"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
