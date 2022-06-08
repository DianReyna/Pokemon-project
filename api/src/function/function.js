const { Pokemon, Type } = require("../db");
const axios = require("axios");
//--------------- getAllPokemonsApi--------------
const AllPokemonsApi = async () => {
  const getApi = await axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((data) => {
      return data.data.results;
    })
    .then((data) => {
      return Promise.all(data.map((res) => axios.get(res.url)));
    })
    .then((data) => {
      return data.map((res) => res.data);
    });
  let arrayPokeApi = getApi.map((poke) => {
    return {
      id: poke.id,
      name: poke.name,
      types: poke.types.map((t) => t.type.name),
      image: poke.sprites.other.home.front_default,
      hp: poke.stats[0].base_stat,
      attack: poke.stats[1].base_stat,
      defense: poke.stats[2].base_stat,
      speed: poke.stats[3].base_stat,
      height: poke.height,
      weight: poke.weight,
    };
  });
  return arrayPokeApi;
};
//---------getAllPokemonsDb---------
const AllPokemonsDb = async () => {
  const dbPokemon = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  return dbPokemon;
};
//----- concatenar db&Api--------------
const AllPokemons = async () => {
  let apiPokemon = await AllPokemonsApi();
  let dbPokemon = await AllPokemonsDb();

  let pokemonsInfo = apiPokemon.concat(dbPokemon);

  return pokemonsInfo;
};

module.exports = {
  AllPokemons,
};
