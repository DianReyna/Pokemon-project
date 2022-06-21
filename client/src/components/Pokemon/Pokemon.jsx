import React from "react";
import PokeCss from "./PokeCss.module.css";
import { Link } from "react-router-dom";
import "./PokeCss.module.css";
export default function Pokemon(props) {
  const { name, img, types, id } = props.pokemon;

  return (
    // <div className={`${PokeCss.card} ${types[0]}`}>
    <div className={`${PokeCss.card}`}>
      <div className={PokeCss.nombreTipos}>
        <Link to={`/detail/${id}`}>
          <h3>{name}</h3>
        </Link>

        <div className={PokeCss.all}>
          <div className={PokeCss.tipos}>
            <p className={PokeCss.tipo}>{types[0]}</p>
            <p className={PokeCss.tipo}>{types[1]}</p>
          </div>
        </div>
        <div className={PokeCss.img}>
          <img
            src={img}
            alt="imagen-pokemon"
            height={100}
            width={100}
            // className={PokeCss.img}
          />
        </div>
      </div>
    </div>
  );
}
