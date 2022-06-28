import React from "react";
import { Link } from "react-router-dom";
import "./ErrorTypeCss.css";
export default function ErrorType() {
  return (
    <div className="container_error">
      <div className="title_error">
        <h3>Error no pokemon found</h3>
      </div>
      <div className="img_error">
        <img
          className="img_saderror"
          src="https://thumbs.gfycat.com/NaturalMerryBlackmamba-max-1mb.gif"
          alt="pikachuSad"
        />
      </div>
      <div className="text_error">
        <p>
          There is no record of the pokemon you are looking for, you can create
          one
        </p>
      </div>
      <div>
        <Link to="/create">
          <button className="button">Create</button>
        </Link>
      </div>
    </div>
  );
}
