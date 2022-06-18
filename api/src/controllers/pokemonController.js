const { Pokemon, Type } = require("../db");
const { AllPokemons } = require("../function/function.js");
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
    if (pokeFinded.length) {
      return res.send(pokeFinded);
    } else {
      res
        .status(404)
        .json(`No se encontro ningun Pokemon con el id: ${idPokemon}`);
    }
  } catch (error) {
    next(error);
  }
};

const postPokemon = async (req, res, next) => {
  const { name, hp, attack, defense, speed, height, weight, types, img } =
    req.body;

  try {
    let findPokemon = await Pokemon.findOne({
      where: { name: name.toLowerCase() },
    });

    if (findPokemon)
      return res.status(404).json({ msg: `El Pokemon ${name} ya existe.` });

    if (!name) return res.json({ msg: "Nombre obligatorio" });

    for (i = 0; i < name.length; i++) {
      if (parseInt(name[i]) === 0 || parseInt(name[i])) {
        return res
          .status(404)
          .send(`name: ${name} invalido, el name debe ser un string`);
      }
    }

    let typeDb = await Type.findAll({ where: { name: types } });

    if (typeDb.length !== types.length)
      return res.status(404).send("El tipo de pokemon incorrecto");

    const newPokemon = await Pokemon.create({
      name: name.toLowerCase(),
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      img,
    });

    newPokemon.addType(typeDb);

    res.status(201).send("Pokemon creado con exito");
  } catch (error) {
    next(error);
    //res.send("Error en la data");
  }
};

module.exports = {
  getPokemons,
  getIdPokemon,
  postPokemon,
};
