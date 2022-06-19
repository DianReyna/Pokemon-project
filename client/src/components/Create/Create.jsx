import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postPokemon, typesPokemons } from "../../redux/actions";

export default function Create() {
  const allTypes = useSelector((state) => state.types);
  const allPokemons = useSelector((state) => state.allPokemons);

  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(typesPokemons());
  });

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  function handleTypeChange(e) {
    setInput({
      ...input,
      types: [...input.types, e.target.value],
    });
  }

  function handleDeleteType(el) {
    setInput({
      ...input,
      types: input.types.filter((t) => t !== el),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let find = allPokemons.filter(
      (p) => p.name.toLowerCase() === input.name.toLowerCase()
    );

    if (find) {
      return alert("Ya existe un Pokemons con este nombre");
    }

    const newPokemon = {
      name: input.name,
      hp: input.hp,
      attack: input.attack,
      defense: input.defense,
      speed: input.speed,
      height: input.height,
      weight: input.weight,
      types: input.types,
    };

    dispatch(postPokemon(newPokemon));

    setInput({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });
    return alert(`El Pokémon fue creado con éxito.`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Link to="/home">
        <span></span>
        <span></span>
        Home
        <span></span>
        <span></span>
      </Link>

      <label>Name:</label>
      <input
        type="text"
        onChange={handleInputChange}
        value={input.name}
        name="name"
      ></input>

      <label>Hp:</label>
      <input
        type="number"
        onChange={handleInputChange}
        value={input.hp}
        name="hp"
      ></input>

      <label>Attack: </label>
      <input
        type="number"
        onChange={handleInputChange}
        value={input.attack}
        name="attack"
      ></input>

      <label>Defense:</label>
      <input
        type="number"
        onChange={handleInputChange}
        value={input.defense}
        name="defense"
      ></input>

      <label>Speed:</label>
      <input
        type="number"
        onChange={handleInputChange}
        value={input.speed}
        name="speed"
      ></input>

      <label>Weight:</label>
      <input
        type="number"
        onChange={handleInputChange}
        value={input.weight}
        name="weight"
      ></input>

      <label>Height:</label>
      <input
        type="number"
        onChange={handleInputChange}
        value={input.height}
        name="height"
      ></input>

      <label>Type:</label>
      <select
        type="number"
        onChange={handleTypeChange}
        value={input.types}
        name="types"
      >
        {allTypes.map((e) => (
          <option value={e.name}>{e.name}</option>
        ))}
      </select>
      <h5>
        {input.types?.map((el) => (
          <p className="nameType">
            {el}
            <button onClick={(e) => handleDeleteType(el)}>delete</button>
          </p>
        ))}
      </h5>

      <button value="submit" type="submit">
        Create
      </button>
    </form>
  );
}
