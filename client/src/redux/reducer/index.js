import {
  GET_POKEMONS,
  GET_POKEMONS_BYID,
  SEARCH_POKEMON,
  TYPES_POKEMONS,
  FILTER_TYPES,
  RESET_DETAIL,
  RESET,
  ORDER_BY_NAME,
} from "../actions";

const initialState = {
  pokemons: [],
  backUp: [],
  types: [],
  detail: [],
  order: [],
  filter: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        backUp: action.payload,
        filter: action.payload,
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        backUp: action.payload,
      };
    case GET_POKEMONS_BYID:
      return {
        ...state,
        detail: action.payload,
      };
    case RESET_DETAIL:
      return {
        ...state,
        detail: [],
      };
    case RESET:
      return {
        ...state,
        order: action.payload,
      };
    case TYPES_POKEMONS:
      return {
        ...state,
        types: action.payload,
      };
    case FILTER_TYPES:
      return {
        ...state,
        backUp: action.payload,
      };
    case ORDER_BY_NAME:
      // console.log(action.payload);
      return {
        ...state,
        order: action.payload,
      };

    default:
      return state;
  }
}
