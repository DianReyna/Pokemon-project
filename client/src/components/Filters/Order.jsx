import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, orderByName, reset } from "../../redux/actions";

export default function Order() {
  const pokemons = useSelector((state) => state.filter);
  const [, setOrder] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  function handleAToZ(e) {
    e.preventDefault();

    let pokemonSort = pokemons.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (b.name > a.name) return -1;
      return 0;
    });
    dispatch(orderByName(pokemonSort));
  }
  function handleZToA(e) {
    e.preventDefault();

    let pokemonSort = pokemons.sort((a, b) => {
      if (a.name > b.name) return -1;
      if (b.name > a.name) return 1;
      return 0;
    });
    dispatch(reset());
    dispatch(orderByName(pokemonSort));
  }

  function handleAttack(e) {
    //   e.preventDefault();
    //   dispatch(orderByAttack(e));
    //   setOrder(e);
  }

  return (
    <div>
      <div>
        <button value={"aToZ"} onClick={handleAToZ}>
          A-Z
        </button>
        <button value={"zToA"} onClick={handleZToA}>
          Z-A
        </button>
      </div>
      <button value={"minToMax"} onClick={handleAttack}>
        min a max
      </button>
      <button value={"maxToMin"} onClick={handleAttack}>
        max a min
      </button>
      <div></div>
    </div>
  );
}
