import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterByOrigen,
  getPokemons,
  orderByAttack,
  orderByName,
} from "../../redux/actions";

export default function Filters() {
  const [, setOrder] = useState("");

  const dispatch = useDispatch();

  function handleReset() {
    dispatch(getPokemons());
  }

  function handleFilterOrigin(e) {
    e.preventDefault();
    dispatch(filterByOrigen(e.target.value));
  }

  // function handleFilterByTypes(e) {
  //   e.preventDefault();
  //   dispatch(filterTypes(e.target.value));
  //   setTypes(e.target.value);
  // }

  function handleFilterName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setOrder(`Order by ${e.target.value}`);
  }

  function handleOrderByAttack(e) {
    e.preventDefault();
    dispatch(orderByAttack(e.target.value));
    setOrder(`Order by ${e.target.value}`);
  }

  return (
    <div>
      <div>
        <button value={"pokemonApi"} onClick={handleFilterOrigin}>
          PokeApi
        </button>
        <button value={"allOrigin"} onClick={handleFilterOrigin}>
          Creado
        </button>
      </div>

      <div>
        <button value={"aToZ"} onClick={handleFilterName}>
          A-Z
        </button>
        <button value={"zToA"} onClick={handleFilterName}>
          Z-A
        </button>
      </div>
      <div>
        <button value={"minToMax"} onClick={handleOrderByAttack}>
          min a max
        </button>
        <button value={"maxToMin"} onClick={handleOrderByAttack}>
          max a min
        </button>
      </div>

      <button onClick={handleReset}>Reload</button>
    </div>
  );
}
