const { Pokemon, Type } = require("../db");
const axios = require("axios");
//--------------- getAllPokemonsApi--------------
const AllPokemonsApi = async () => {
  const getApi = await axios
    .get("https://pokeapi.co/api/v2/pokemon")

    .then(async (data) => {
      for (let key in data.data) {
        if (key === "next") {
          let nextUrl = await Promise.all([axios.get(data.data[key])]);
          let result = nextUrl.map((res) => res.data.results);
          let allPoke = data.data.results.concat(result[0]);
          return allPoke;
        }
      }
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
      img: poke.sprites.other.home.front_default,
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
const pokemonsDb = async () => {
  const dbPokemon = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const dataDb = dbPokemon?.map((poke) => {
    return {
      id: poke.dataValues.id,
      name: poke.dataValues.name,
      types: poke.dataValues.types.map((t) => t.dataValues.name),
      img: poke.dataValues.img,
      hp: poke.dataValues.hp,
      attack: poke.dataValues.attack,
      defense: poke.dataValues.defense,
      speed: poke.dataValues.speed,
      height: poke.dataValues.height,
      weight: poke.dataValues.weight,
    };
  });
  return dataDb;
};
//----- concatenar db&Api--------------
const AllPokemons = async () => {
  let apiPokemon = await AllPokemonsApi();
  let dbPokemon = await pokemonsDb();

  let pokemonsInfo = [...apiPokemon, ...dbPokemon];

  return pokemonsInfo;
};

module.exports = {
  AllPokemons,
};
