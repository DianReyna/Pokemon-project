import { useEffect } from "react";
import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPokemons, searchPokemon } from "../../redux/actions";

import "./Search.css";

export default function SearchBar() {
  const [search, setSerch] = useState("");
  const dispatch = useDispatch();

  const histoy = useHistory();
  function handleInputChange(e) {
    setSerch(e.target.value);
  }
  console.log(histoy);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchPokemon(search.toLocaleLowerCase()));
    setSerch("");
  }

  return (
    <div className="searchPokemon">
      <input
        value={search}
        onChange={(e) => handleInputChange(e)}
        type="text"
        placeholder="Search Pokemon"
      />
      <button
        className="button-search"
        onClick={(e) => handleSubmit(e)}
        type="submit"
      >
        <div className="button-content">
          Search
          <img
            src="http://www.purarteadesivos.com.br/wp-content/uploads/2017/04/Pok%C3%A9mon-go.png"
            alt="pokebola"
          />
        </div>
      </button>
    </div>
  );
}
