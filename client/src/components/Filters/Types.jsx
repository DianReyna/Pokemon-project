import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import typesPokemons from "../../redux/actions";

export default function Types() {
  let type = useSelector((state) => state.types);
  let pokemons = useSelector((state) => state.pokemons);
  const [pokemon, setPokemon] = useState(pokemons);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(typesPokemons());
  }, [dispatch]);

  function handleFilter(e) {
    if (e === "borrar") setPokemon(pokemons);

    let newPokemon = pokemons.filter((p) => p.types.some((t) => t === e));
    let allType = newPokemon.map((p) => {
      let newPokemons = { ...p };
      return newPokemons;
    });
    console.log(allType);
    return setPokemon(allType);
  }
  return (
    <div className="">
      <button onClick={() => handleFilter("borrar")}>Mostrar Todos</button>

      <div>
        {type?.map((t, index) => {
          return (
            <button key={index} onClick={() => handleFilter(t.name)}>
              {t.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
