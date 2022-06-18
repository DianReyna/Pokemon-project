import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemons } from "../../redux/actions";
import Type from "../Filters/Type";

import Paginado from "../Paginado/Paginado";
import Pokemon from "../Pokemon/Pokemon";
import AllPokeCss from "./AllPokeCss.module.css";

export default function Allpokemons() {
  let pokemons = useSelector((state) => state.allPokemons);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const maximo = pokemons.length / itemsPerPage;

  const indexLastItem = (currentPage - 1) * itemsPerPage;
  const indexFirstItem = (currentPage - 1) * itemsPerPage + itemsPerPage;

  const pokemonData = useSelector((state) =>
    state.allPokemons
      ? state.allPokemons.slice(indexLastItem, indexFirstItem)
      : false
  );

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div>
      <Type setCurrentPage={setCurrentPage} />

      <div className={AllPokeCss.columnas}>
        {pokemonData?.map((pokemon) => {
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
