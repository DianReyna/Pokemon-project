import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTypes, typesPokemons } from "../../redux/actions";

export default function Types(pokeData, setTypes, setCurrentPage) {
  const allType = useSelector((state) => state.types);
  let pokemons = pokeData.pokemons;
  console.log(pokeData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(typesPokemons());
  }, [dispatch]);

  function handleFilter(e) {
    if (e === "allTypes") dispatch(filterTypes(pokemons));

    let newPokemon = pokemons.filter((p) => p.types.some((t) => t === e));
    let allTypes = newPokemon.map((p) => {
      let filterPokemon = { ...p };

      return filterPokemon;
    });

    e.preventDefault();
    dispatch(filterTypes(allTypes));
    setCurrentPage.setCurrentPage(1);
    setTypes(e.target.value);
  }

  return (
    <div>
      <button value="allTypes" onClick={handleFilter}>
        Mostrar Todos
      </button>

      <div>
        {allType?.map((t, index) => {
          return (
            <button key={index} value={t.name} onClick={handleFilter}>
              {t.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
