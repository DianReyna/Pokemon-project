import SearchBar from "../SearchBar/SearchBar";

import Allpokemons from "../AllPokemons/AllPokemons";
import Filters from "../Filters/Filters";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Pokemons</h2>
      <Link to="/create">
        <li>Create</li>
      </Link>
      <Filters />
      <SearchBar />
      <Allpokemons />
    </div>
  );
}
