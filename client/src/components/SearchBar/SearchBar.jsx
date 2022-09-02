import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemon } from "../../redux/actions";

import "./Search.css";

export default function SearchBar() {
  const [search, setSerch] = useState("");
  const dispatch = useDispatch();

  function handleInputChange(e) {
    setSerch(e.target.value);
  }
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
            src="https://www.svgrepo.com/show/276264/pokeball-pokemon.svg"
            alt="pokebola"
          />
        </div>
      </button>
    </div>
  );
}
