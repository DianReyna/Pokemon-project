import React from "react";
import PokeCss from "./PokeCss.module.css";
import { Link } from "react-router-dom";
import "./PokeCss.module.css";
export default function Pokemon(props) {
  const { name, img, types, id } = props.pokemon;

  return (
    <div className={`${PokeCss.card}`}>
      <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
        <div className={PokeCss.nombreTipos}>
          <div className={PokeCss.pokenombre}>
            <h3>{name}</h3>
          </div>

          <div className={PokeCss.all}>
            <div className={PokeCss.tipos}>
              {types.length === 2 ? (
                <div>
                  <p id={PokeCss.tipo} className={types[0]}>
                    {types[0]}
                  </p>
                  <p id={PokeCss.tipo} className={types[1]}>
                    {types[1]}
                  </p>
                </div>
              ) : (
                <p id={PokeCss.tipo} className={types[0]}>
                  {types[0]}
                </p>
              )}
            </div>
          </div>
          <div className={PokeCss.img}>
            <img src={img} alt="imagen-pokemon" height={100} width={100} />
          </div>
        </div>
      </Link>
    </div>
  );
}
