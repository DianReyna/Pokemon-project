import "./App.css";
import { Route } from "react-router";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import DetailContainer from "./components/DetailContainer/DetailContainer";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />

      <Route path="/home" component={Home} />
      <Route path="/detail/:id" component={DetailContainer} />
    </div>
  );
}

export default App;
