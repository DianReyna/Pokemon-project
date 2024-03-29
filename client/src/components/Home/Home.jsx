import Allpokemons from "../AllPokemons/AllPokemons";
import HomeCss from "./HomeCss.module.css";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  return (
    <div className={HomeCss.header}>
      <div className={(HomeCss.container, HomeCss.header__container)}>
        <div>
          <NavBar />
        </div>
        <div>
          <Allpokemons />
        </div>
      </div>
    </div>
  );
}
