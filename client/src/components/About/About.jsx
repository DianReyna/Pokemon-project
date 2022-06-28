import BotonesNav from "../BotonesNav/BotonesNav";
import "./AboutCss.css";
export default function About() {
  return (
    <div>
      <div>
        <BotonesNav />
      </div>

      <div className="containerPokemon">
        <div className="pokeImage">
          <img
            src="https://www.gratistodo.com/wp-content/uploads/2016/12/Pokemon-gifs-7.gif"
            alt="imagen-pokemon"
          />
        </div>
        <div className="PokeText">
          <div className="titlePoke">
            <h3>HENRY-POKEMON</h3>
          </div>

          <div className="contentText">
            <p>
              This individual project was carried out with the purpose of
              affirming and connecting the concepts learned in my training as a
              Full Stack developer at Henry Bootcamp. The idea was to create an
              application in which you can see the different pokemons, create a
              new pokemon, search for them, sort them and filter them.
            </p>

            <p>
              A server was developed in Node/Express creating routes to show and
              create. The <a href="https://pokeapi.co/">pokeapi</a> was used to
              obtain the first 40 pokemons, in this application the only
              endpoints that were used were:
            </p>

            <a href="https://pokeapi.co/api/v2/pokemon">
              <p> https://pokeapi.co/api/v2/pokemon</p>
            </a>

            <a href="https://pokeapi.co/api/v2/type">
              <p> https://pokeapi.co/api/v2/type</p>
            </a>

            <p>
              A database was created to allow the user to create new pokemons.
            </p>
            <h4>Used technology</h4>

            <div className="tecnologias">
              <div className="info">
                <img
                  className="imgJS"
                  src="https://ayudawp.com/wp-content/uploads/2017/01/javascript-logo-escudo.png"
                  alt="JS"
                />
                <span className="tooltip-text">JavaScript</span>
              </div>
              <div className="info">
                <img
                  className="imgCSS"
                  src="https://res.cloudinary.com/marcomadera/image/upload/v1602894559/Blog/7/css_k23ypb.png"
                  alt="CSS"
                />
                <span className="tooltip-text">Css</span>
              </div>
              <div className="info">
                <img
                  className="imgHTML"
                  src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                  alt="HTML"
                />
                <span className="tooltip-text">Html</span>
              </div>
              <div className="info">
                <img
                  className="imgREACT"
                  src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png"
                  alt="REACT"
                />
                <span className="tooltip-text">React</span>
              </div>
              <div className="info">
                <img
                  className="imgREDUX"
                  src="https://img.icons8.com/color/480/redux.png"
                  alt="REDUX"
                />
                <span className="tooltip-text">Redux</span>
              </div>
              <div className="info">
                <img
                  className="imgEXPRESS"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxxFj-vn-t6WNplSdBQCRHmn7urIYgv2ScZA&usqp=CAU"
                  alt="EXPRESS"
                />
                <span className="tooltip-text">Express</span>
              </div>
              <div className="info">
                <img
                  className="imgPOSTGRESQL"
                  src="https://icons-for-free.com/iconfiles/png/512/postgresql+plain-1324760555607314126.png"
                  alt="POSTGRESQL"
                />
                <span className="tooltip-text">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div>
          <h4>Contact me</h4>
        </div>
        <div className="foo_item">
          <a href="https://www.linkedin.com/in/dianeth-reyna-armas-9a4816232/">
            <img
              className="linkedIn"
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="linkedIn"
            />
          </a>
        </div>
        <div className="foo_item">
          <a href="https://github.com/DianReyna">
            <img
              className="github"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="github"
            />
          </a>
        </div>
        <div className="foo_name">
          <h5>By Dianeth Reyna</h5>
        </div>
      </div>
    </div>
  );
}
