const { Sequelize } = require("sequelize");
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

const getPokemons = async (req, res, next) => {
  const { name } = req.body;
  try {
    // let x = getApi.data.results?.map((pokemons) => {
    // const idpokemon = axios.get(getApi.data.results[0].url).then((data) => {
    //   return res.send(data);
    // });
    //   return idpokemon;
    // });
    //---------getAllPokemonsDb-----------
    let apiPokemon = await AllPokemonsApi();
    let dbPokemon = await Pokemon.findAll({
      include: {
        attributes: ["name"],
        model: Type,
        through: {
          attributes: [],
        },
      },
    });

    //----- concatenar dbApi--------------
    let allPokemons = [...apiPokemon, ...dbPokemon];

    return res.send(apiPokemon);
  } catch (error) {
    next(error);
  }
};

const getIdPokemon = async (req, res, next) => {
  const { idPokemon } = req.params;
  //--------------getPokemonIdApi-----------
  let poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);

  let pokeid = {
    id: poke.data.id,
    name: poke.data.name,
    types: poke.data.types.map((t) => t.type.name),
    image: poke.data.sprites.other.home.front_default,
    hp: poke.data.stats[0].base_stat,
    attack: poke.data.stats[1].base_stat,
    defense: poke.data.stats[2].base_stat,
    speed: poke.data.stats[3].base_stat,
    height: poke.data.height,
    weight: poke.data.weight,
  };
  //-------------getPokemonIdDb-----------------

  //let idpokemondb = Pokemon.findByPk(id);

  res.send(pokeid);
};

const postPokemon = async (req, res, next) => {
  const { name, types, image, hp, attack, defense, speed, height, weight } =
    req.body;

  let newPokemon = Pokemon.create({
    name,
    types,
    image,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
  });
  res.send("exito");
};

module.exports = {
  getPokemons,
  getIdPokemon,
  postPokemon,
};
