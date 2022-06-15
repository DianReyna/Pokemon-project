// import { useEffect } from "react";
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

export default function PokemonDetail(pokeDetail) {
  const { name, id, types, img, hp, attack, defense, speed, height, weight } =
    pokeDetail.pokeDetail;
  return (
    <div>
      <div>
        <div>
          <p>#{id}</p>
          <h2>{name}</h2>
          <div>
            {types?.map((type, i) => (
              <p key={i}>{type}</p>
            ))}
          </div>
        </div>

        <div>
          <div>
            <div>
              <div>
                <span>{hp}</span>
              </div>
            </div>
            <div>HP</div>
          </div>

          <div>
            <div>
              <div>
                <span style={{ color: "white", display: "inline" }}>
                  {attack}
                </span>
              </div>
            </div>
            <div>Attack</div>
          </div>

          <div>
            <div>
              <div>
                <span>{defense}</span>
              </div>
            </div>
            <div>Defense</div>
          </div>

          <div>
            <div>
              <div>
                <span>{speed}</span>
              </div>
            </div>
            <div>Speed</div>
          </div>
        </div>

        <div>
          <p>height: {height}</p>
          <p>weight: {weight}</p>
        </div>
      </div>
      <img src={img} alt="Pokemon" />
    </div>
  );
}
