import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const SEARCH_POKEMON = "SEARCH_POKEMON";
export const TYPES_POKEMONS = "TYPES_POKEMONS";
export const GET_POKEMONS_BYID = "GET_POKEMONS_BYID";
export const FILTER_TYPES = "FILTER_TYPES";
export const RESET_DETAIL = "RESET_DETAIL";
export const POST_POKEMON = "POST_POKEMON";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const FILTER_BY_ORIGEN = "FILTER_BY_ORIGEN";
const URL = process.env.REACT_APP_URL;
const URL_POKEMONS = `${URL}/api/pokemons`;
const URL_TYPES = `${URL}/api/types`;

export function getPokemons() {
  return async function (dispatch) {
    await axios
      .get(URL_POKEMONS)
      .then((data) => {
        return dispatch({
          type: GET_POKEMONS,
          payload: data.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
        return alert("There was an error loading the information. Try again");
      });
  };
}

export function searchPokemon(search) {
  return async function (dispatch) {
    if (search.search(/^[a-zA-Zñáéíóúü]*$/)) {
      return alert("The name must only contain letters.");
    }
    await axios
      .get(`${URL_POKEMONS}/?name=${search}`)
      .then((data) => {
        return dispatch({
          type: SEARCH_POKEMON,
          payload: data.data,
        });
      })
      .catch((error) => {
        return dispatch({
          type: SEARCH_POKEMON,
          payload: error.name,
        });
      });
  };
}

export function getPokemonsById(id) {
  return async function (dispatch) {
    await axios
      .get(`${URL_POKEMONS}/${id}`)
      .then((data) => {
        return dispatch({
          type: GET_POKEMONS_BYID,
          payload: data.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
        return alert(`We did not find the Pokemon with the id ${id}`);
      });
  };
}
export function resetDetail() {
  return {
    type: RESET_DETAIL,
  };
}

export function postPokemon(payload) {
  return async function (dispatch) {
    await axios
      .post(URL_POKEMONS, payload)
      .then((data) => {
        return dispatch({
          type: POST_POKEMON,
          payload: data.data,
        });
      })
      .catch((error) => {
        return alert("There was an error creating the Pokemon.");
      });
  };
}

export function typesPokemons() {
  return async function (dispatch) {
    await axios
      .get(URL_TYPES)
      .then((data) => {
        return dispatch({
          type: TYPES_POKEMONS,
          payload: data.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
        //return alert("No encontre el Types. Intenta de nuevo más tarde");
      });
  };
}

export function filterTypes(payload) {
  return {
    type: FILTER_TYPES,
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

export function orderByAttack(payload) {
  return {
    type: ORDER_BY_ATTACK,
    payload,
  };
}

export function filterByOrigen(payload) {
  return {
    type: FILTER_BY_ORIGEN,
    payload,
  };
}
