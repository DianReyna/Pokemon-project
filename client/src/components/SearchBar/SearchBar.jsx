import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemon } from "../../redux/actions";

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
    <div>
      <input
        value={search}
        onChange={(e) => handleInputChange(e)}
        type="text"
        placeholder="Pokemon name"
      />
      <button onClick={(e) => handleSubmit(e)} type="submit">
        Buscar
      </button>
    </div>
  );
}
