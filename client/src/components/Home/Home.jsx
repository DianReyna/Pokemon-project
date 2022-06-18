import SearchBar from "../SearchBar/SearchBar";
import Types from "../Filters/Types";

import Allpokemons from "../AllPokemons/AllPokemons";
import Order from "../Filters/Order";

export default function Home() {
  return (
    <div>
      <h2>Pokemons</h2>
      <Types />
      <Order />
      <SearchBar />
      <Allpokemons />
    </div>
  );
}
