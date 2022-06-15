import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const SEARCH_POKEMON = "SEARCH_POKEMON";
export const TYPES_POKEMONS = "TYPES_POKEMONS";
export const GET_POKEMONS_BYID = "GET_POKEMONS_BYID";
const URL = "http://localhost:3001/api/pokemons";

export function getPokemons() {
  return async function (dispatch) {
    await axios.get(URL).then((data) => {
      return dispatch({
        type: GET_POKEMONS,
        payload: data.data,
      });
    });
  };
}

export function searchPokemon(search) {
  return async function (dispatch) {
    let data = await axios.get(`${URL}/?name=${search}`);
    return dispatch({
      type: SEARCH_POKEMON,
      payload: data.data,
    });
  };
}

export default function typesPokemons() {
  return async function (dispatch) {
    await axios.get("http://localhost:3001/api/types").then((data) => {
      return dispatch({
        type: TYPES_POKEMONS,
        payload: data.data,
      });
    });
  };
}

export function getPokemonsById(id) {
  return async function (dispatch) {
    await axios.get(`${URL}/${id}`).then((data) => {
      return dispatch({
        type: GET_POKEMONS_BYID,
        payload: data.data,
      });
    });
  };
}
