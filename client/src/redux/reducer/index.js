import {
  GET_POKEMONS,
  GET_POKEMONS_BYID,
  SEARCH_POKEMON,
  TYPES_POKEMONS,
} from "../actions";

const initialState = {
  pokemons: [],
  pokemon: [],
  types: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
      };
    case TYPES_POKEMONS:
      return {
        ...state,
        types: action.payload,
      };
    case GET_POKEMONS_BYID:
      return {
        ...state,
        pokemon: action.payload,
      };
    default:
      return state;
  }
}
