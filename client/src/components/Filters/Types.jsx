import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTypes, getPokemons, typesPokemons } from "../../redux/actions";

export default function Types() {
  const allType = useSelector((state) => state.types);

  const pokemons = useSelector((state) => state.pokemons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(typesPokemons());
  }, [dispatch]);

  function handleFilter(e) {
    if (e === "allTypes") dispatch(getPokemons());

    let newPokemon = pokemons.filter((p) => p.types.some((t) => t === e));
    let allTypes = newPokemon.map((p) => {
      let filterPokemon = { ...p };

      return filterPokemon;
    });
    dispatch(filterTypes(allTypes));
  }

  return (
    <div>
      <button onClick={() => handleFilter("allTypes")}>Mostrar Todos</button>

      <div>
        {allType?.map((t, index) => {
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
