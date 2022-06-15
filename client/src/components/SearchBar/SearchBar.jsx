import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemon } from "../../redux/actions";

export default function SearchBar() {
  const [search, setSerch] = useState("");
  const dispatch = useDispatch();

  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(searchPokemon(search));
  }
  function inputChange(e) {
    setSerch(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" onChange={inputChange} value={search} />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
}
