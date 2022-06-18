import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemons } from "../../redux/actions";
import Paginado from "../Paginado/Paginado";
import Pokemon from "../Pokemon/Pokemon";
import AllPokeCss from "./AllPokeCss.module.css";

export default function Allpokemons() {
  let allPokemon = useSelector((state) => state.backUp);
  let orderPokemon = useSelector((state) => state.order);

  let pokeData = null;
  if (allPokemon) {
    pokeData = allPokemon;
  } else {
    pokeData = orderPokemon;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const maximo = pokeData.length / itemsPerPage;

  const indexLastItem = (currentPage - 1) * itemsPerPage;
  const indexFirstItem = (currentPage - 1) * itemsPerPage + itemsPerPage;

  let pokemonPerPage = pokeData.slice(indexLastItem, indexFirstItem);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
    // dispatch(orderByName());
  }, [dispatch]);

  return (
    <div>
      <div className={AllPokeCss.columnas}>
        {pokemonPerPage?.map((pokemon) => {
          return <Pokemon key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
      <Paginado
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        maximo={maximo}
      />
    </div>
  );
}
