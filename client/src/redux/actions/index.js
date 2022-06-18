import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const SEARCH_POKEMON = "SEARCH_POKEMON";
export const TYPES_POKEMONS = "TYPES_POKEMONS";
export const GET_POKEMONS_BYID = "GET_POKEMONS_BYID";
export const FILTER_TYPES = "FILTER_TYPES";
export const RESET_DETAIL = "RESET_DETAIL";
export const RESET = "RESET";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";

const URL_ALL_POKEMONS = "http://localhost:3001/api/pokemons";
export const URL_TYPES = "http://localhost:3001/api/types";

export function getPokemons() {
  return async function (dispatch) {
    await axios
      .get(URL_ALL_POKEMONS)
      .then((data) => {
        return dispatch({
          type: GET_POKEMONS,
          payload: data.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
        return alert(
          "Hubo un error al cargar la informacion. Intenta de nuevo"
        );
      });
  };
}

export function searchPokemon(search) {
  return async function (dispatch) {
    if (search.search(/^[a-zA-Zñáéíóúü]*$/)) {
      return alert("El nombre solo debe contener letras.");
    }
    await axios
      .get(`${URL_ALL_POKEMONS}/?name=${search}`)
      .then((data) => {
        return dispatch({
          type: SEARCH_POKEMON,
          payload: data.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
        return alert("no se encontro el pokemon");
      });
  };
}

export function getPokemonsById(id) {
  return async function (dispatch) {
    await axios
      .get(`${URL_ALL_POKEMONS}/${id}`)
      .then((data) => {
        return dispatch({
          type: GET_POKEMONS_BYID,
          payload: data.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
        return alert(`No encontramos al Pokemon con el id ${id}`);
      });
  };
}
export function resetDetail() {
  return {
    type: RESET_DETAIL,
  };
}
export function reset() {
  return {
    type: RESET_DETAIL,
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
  try {
    return {
      type: FILTER_TYPES,
      payload,
    };
  } catch (error) {
    console.log(error.message);
    return alert("Error: la busqueda de este filtro falló");
  }
}

export function orderByName(payload) {
  // console.log(payload);
  try {
    return {
      type: ORDER_BY_NAME,
      payload,
    };
  } catch (error) {
    console.log(error.message);
    return alert("Error: fallo el ordenamiento");
  }
}

export function orderByAttack(payload) {
  return {
    type: ORDER_BY_ATTACK,
    payload,
  };
}
