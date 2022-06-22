import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemons } from "../../redux/actions";
import ErrorType from "../Error/ErrorType";
import Filters from "../Filters/Filters";
import Type from "../Filters/Type";
import PikachuLoader from "../Loader/PikachuLoader";

import Paginado from "../Paginado/Paginado";
import Pokemon from "../Pokemon/Pokemon";
import AllPoke from "./AllPokeCss.module.css";

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
    <div className={AllPoke.container}>
      <div className={AllPoke.types}>
        <Type setCurrentPage={setCurrentPage} />
      </div>
      <div className={AllPoke.container_two}>
        <div className={AllPoke.filters}>
          <Filters setCurrentPage={setCurrentPage} />
        </div>
        <div className={AllPoke.container_three}>
          <div className={AllPoke.container_colum}>
            {pokemonData[0] === "error" ? (
              <div>
                <ErrorType />
              </div>
            ) : pokemonData.length === 0 ? (
              <div className="AllPoke.loaderpika">
                <PikachuLoader />
              </div>
            ) : (
              pokemonData?.map((pokemon) => {
                return <Pokemon key={pokemon.id} pokemon={pokemon} />;
              })
            )}
          </div>
          <div className={AllPoke.paginado}>
            <Paginado
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              maximo={maximo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
