import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTypes, typesPokemons } from "../../redux/actions";

export default function Type(setCurrentPage) {
  const totalTypes = useSelector((state) => state.types);
  const [, setTypes] = useState("allPokemon");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(typesPokemons());
  }, [dispatch]);

  function handleFilterByTypes(e) {
    e.preventDefault();
    dispatch(filterTypes(e.target.value));
    setCurrentPage.setCurrentPage(1);
    setTypes(e.target.value);
  }

  return (
    <div>
      <button value="allTypes" onClick={handleFilterByTypes}>
        Mostrar Todos
      </button>

      <div>
        {totalTypes?.map((t, index) => {
          return (
            <button key={index} value={t.name} onClick={handleFilterByTypes}>
              {t.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
