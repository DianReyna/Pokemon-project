import React from "react";
import PokeCss from "./PokeCss.module.css";
import { Link } from "react-router-dom";

export default function Pokemon({ name, img, types, id }) {
  return (
    <div key={name} className={PokeCss.columnas}>
      <div className={`${PokeCss.card} ${types[0]}`}>
        <div className={PokeCss.nombreTipos}>
          <Link to={`/detail/${id}`}>
            <h3>{name}</h3>
          </Link>

          <div className={PokeCss.tipos}>
            <p className={PokeCss.tipo}>{types[0]}</p>
            <p className={PokeCss.tipo}>{types[1]}</p>
          </div>
        </div>
        <img
          src={img}
          alt="imagen-pokemon"
          height={200}
          width={200}
          className={PokeCss.img}
        />
      </div>
    </div>
  );
}
