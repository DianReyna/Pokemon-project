const { Pokemon, Type } = require("../db");
const { AllPokemons, AllPokemonsApi } = require("../function/function.js");
const axios = require("axios");

const getPokemons = async (req, res, next) => {
  const { name } = req.query;

  try {
    const allPokemonInfo = await AllPokemons();
    if (name) {
      let found = allPokemonInfo.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      found.length
        ? res.send(found)
        : res.status(404).send("El pokemon que busca no existe");
    } else {
      res.send(allPokemonInfo);
    }
  } catch (error) {
    next(error);
  }
};

const getIdPokemon = async (req, res, next) => {
  const { idPokemon } = req.params;
  try {
    const allPokemonInfo = await AllPokemons();
    let pokeFinded = allPokemonInfo.filter((e) => e.id == idPokemon);
    if (pokeFinded.length) return res.send(pokeFinded);
  } catch (error) {
    res
      .status(404)
      .json({ err: `No se encontro ningun Pokemon con el id: ${idPokemon}` });
  }
};

const postPokemon = async (req, res, next) => {
  const {
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    types,
    img,
    createdInDb,
  } = req.body;

  try {
    let findPokemon = await Pokemon.findOne({
      where: { name: name.toLowerCase() },
    });

    if (findPokemon) return res.json({ msg: `El Pokemon ${name} ya existe.` });

    if (!name) return res.json({ msg: "Nombre obligatorio" });
    const newPokemon = await Pokemon.create({
      name: name.toLowerCase(),
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      types,
      img,
      createdInDb,
    });

    let typeDb = await Type.findAll({ where: { name: types } });
    newPokemon.addType(typeDb);

    res.status(201).send("Pokemon creado con exito");
  } catch (error) {
    res.send("Error en la data");
  }
};

module.exports = {
  getPokemons,
  getIdPokemon,
  postPokemon,
};
