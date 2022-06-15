import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemons } from "../../redux/actions";
import Pokemon from "../Pokemon/Pokemon";
import AllPokeCss from "./AllPokeCss.module.css";

export default function Allpokemons() {
  let allPokemon = useSelector((state) => state.pokemons);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div className={AllPokeCss.columnas}>
      {allPokemon?.map((pokemon) => {
        return (
          <Pokemon
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            img={pokemon.img}
            types={pokemon.types}
          />
        );
      })}
    </div>
  );
}
