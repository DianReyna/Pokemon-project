import {
  GET_POKEMONS,
  GET_POKEMONS_BYID,
  SEARCH_POKEMON,
  TYPES_POKEMONS,
  FILTER_TYPES,
  RESET_DETAIL,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  FILTER_BY_ORIGEN,
} from "../actions";

const initialState = {
  pokemons: [],
  allPokemons: [],
  detail: [],
  types: [],
  setPage: 0,
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
        filter: action.payload,
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        allPokemons: action.payload,
        setPage: 1,
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
    case TYPES_POKEMONS:
      return {
        ...state,
        types: action.payload,
      };
    case FILTER_TYPES:
      const pokemons = state.pokemons;
      let filtType =
        action.payload === "allTypes"
          ? pokemons
          : pokemons.filter(
              (e) =>
                e.types.map((type) => type)[0] === action.payload ||
                e.types.map((type) => type)[1] === action.payload
            );
      if (filtType.length === 0) {
        filtType = ["error"];
      }
      return {
        ...state,
        allPokemons: filtType,
      };

    case ORDER_BY_NAME:
      const pokemonSort =
        action.payload === "aToZ"
          ? state.allPokemons.sort((a, b) => {
              if (a.name > b.name) return 1;
              else {
                return -1;
              }
            })
          : state.allPokemons.sort((a, b) => {
              if (a.name > b.name) return -1;
              else {
                return 1;
              }
            });
      return {
        ...state,
        allPokemons: pokemonSort,
      };

    case ORDER_BY_ATTACK:
      let OrderByAttack =
        action.payload === "minToMax"
          ? state.allPokemons.sort((a, b) => {
              if (a.attack > b.attack) return 1;
              if (b.attack > a.attack) return -1;
              return 0;
            })
          : state.allPokemons.sort((a, b) => {
              if (a.attack > b.attack) return -1;
              if (b.attack > a.attack) return 1;
              return 0;
            });
      return {
        ...state,
        allPokemons: OrderByAttack,
      };

    case FILTER_BY_ORIGEN:
      const value = action.payload;
      let filterOrigen = state.pokemons.filter((pokemon) =>
        pokemon.id.toString().includes("-")
      );
      const filterApi = state.pokemons.filter(
        (pokemon) => !pokemon.id.toString().includes("-")
      );

      return {
        ...state,
        allPokemons: value === "pokeApi" ? filterApi : filterOrigen,
      };

    default:
      return state;
  }
}
