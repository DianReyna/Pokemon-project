import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTypes, typesPokemons } from "../../redux/actions";
import "./TypeCss.css";

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
    <div className="filtro_type">
      <button
        className="btn_todos"
        value="allTypes"
        onClick={handleFilterByTypes}
      >
        Show all
      </button>
      <div className="botones">
        {totalTypes?.map((t, index) => {
          return (
            <button
              className={` ${t.name}`}
              id="btn_filtro"
              key={index}
              value={t.name}
              onClick={handleFilterByTypes}
            >
              {t.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
