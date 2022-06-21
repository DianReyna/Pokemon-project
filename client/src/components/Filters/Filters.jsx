import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterByOrigen,
  getPokemons,
  orderByAttack,
  orderByName,
} from "../../redux/actions";

import "./FiltersCss.css";

export default function Filters(setCurrentPage) {
  const [, setOrder] = useState("");

  const dispatch = useDispatch();

  function handleReset() {
    dispatch(getPokemons());
  }

  function handleFilterOrigin(e) {
    e.preventDefault();
    dispatch(filterByOrigen(e.target.value));
    setCurrentPage.setCurrentPage(1);
  }

  function handleFilterName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setOrder(`Order by ${e.target.value}`);
    setCurrentPage.setCurrentPage(1);
  }

  function handleOrderByAttack(e) {
    e.preventDefault();
    dispatch(orderByAttack(e.target.value));
    setOrder(`Order by ${e.target.value}`);
    setCurrentPage.setCurrentPage(1);
  }

  return (
    <div className="filt_container">
      <div id="title">
        <p>Filters</p>
      </div>

      <div className="container_btn">
        <div className="container_btn1">
          <button
            className="btn"
            value={"pokeApi"}
            onClick={handleFilterOrigin}
          >
            Existing
          </button>
        </div>

        <div>
          <button
            className="btn"
            value={"allOrigin"}
            onClick={handleFilterOrigin}
          >
            Created
          </button>
        </div>
      </div>

      <div>
        <p className="title">Order</p>
      </div>
      <div className="container_btn">
        <div className="container_btn1">
          <button className="btn" value={"aToZ"} onClick={handleFilterName}>
            A-Z
          </button>
        </div>
        <div>
          <button className="btn" value={"zToA"} onClick={handleFilterName}>
            Z-A
          </button>
        </div>
      </div>
      <div>
        <p className="title">Attack power</p>
      </div>
      <div className="container_btn">
        <div className="container_btn1">
          <button
            className="btn"
            value={"minToMax"}
            onClick={handleOrderByAttack}
          >
            min a max
          </button>
        </div>

        <div>
          <button
            className="btn"
            value={"maxToMin"}
            onClick={handleOrderByAttack}
          >
            max a min
          </button>
        </div>
      </div>

      <button id="reset" className="btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
