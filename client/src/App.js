import "./App.css";
import Allpokemons from "./components/AllPokemons/AllPokemons";
import SearchBar from "./components/SearchBar/SearchBar";
import { Route } from "react-router";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Types from "./components/Filters/Types";
import DetailContainer from "./components/DetailContainer/DetailContainer";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />

      <Route path="/home">
        <h2> Pokemons</h2>
        <Types />
        <SearchBar />
        <Allpokemons />
      </Route>

      <Route path="/detail/:id" component={DetailContainer} />
    </div>
  );
}

export default App;
