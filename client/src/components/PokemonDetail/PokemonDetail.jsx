import BotonesNav from "../BotonesNav/BotonesNav.jsx";
import "./DetailCss.css";
export default function PokemonDetail(pokeDetail) {
  const { name, id, types, img, hp, attack, defense, speed, height, weight } =
    pokeDetail.pokeDetail;
  return (
    <div className="container">
      <div className="navContainer">
        <BotonesNav />
      </div>
      <div id="card" className="detail_container">
        <div className="id_container">
          <div className="pokeId">
            <div id="id">
              <h5>Id:</h5>
            </div>
            <div id="idpokemon">
              <h5>{id}</h5>
            </div>
          </div>
        </div>
        <div className="pokeImg">
          <img className="image" src={img} alt="Pokemon" />
        </div>
        <div className="pokeName">
          <div id="name">
            <h2>Name:</h2>
          </div>
          <div id="namepokemon">
            <h2>{name}</h2>
          </div>
        </div>

        <div className="ContainerTypes">
          {types?.map((type, i) => (
            <div key={i} className={` ${type}`} id="pokeTypes">
              <p id="text">{type}</p>
            </div>
          ))}
        </div>

        <div className="power">
          <div className="cont_name">
            <span>Hp: </span>
          </div>
          <div className="cont_point">
            <span>{hp}</span>
          </div>
        </div>

        <div className="power">
          <div className="cont_name">
            <span>Attack: </span>
          </div>
          <div className="cont_point">
            <span>{attack}</span>
          </div>
        </div>

        <div className="power">
          <div className="cont_name">
            <span>Defense: </span>
          </div>
          <div className="cont_point">
            <span>{defense}</span>
          </div>
        </div>

        <div className="power">
          <div className="cont_name">
            <span>Speed: </span>
          </div>
          <div className="cont_point">
            <span>{speed}</span>
          </div>
        </div>

        <div className="power">
          <div className="cont_name">
            <span>Height: </span>
          </div>
          <div className="cont_point">
            <span>{height}</span>
          </div>
        </div>

        <div className="power">
          <div className="cont_name">
            <span>Weight: </span>
          </div>
          <div className="cont_point">
            <span>{weight}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
