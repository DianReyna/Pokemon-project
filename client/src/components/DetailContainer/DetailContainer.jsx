import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonsById } from "../../redux/actions";
import PokemonDetail from "../PokemonDetail/PokemonDetail";

export default function DetailContainer() {
  const pokemon = useSelector((state) => state.pokemon);
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonsById(id));
  }, [dispatch, id]);

  return (
    <div>
      {pokemon?.map((p) => {
        return <PokemonDetail key={p.id} pokeDetail={p} />;
      })}
    </div>
  );
}
