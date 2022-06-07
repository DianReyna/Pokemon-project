const {
  getPokemons,
  getIdPokemon,
  postPokemon,
} = require("../controllers/controllerPokemon.js");
const { Router } = require("express");
const router = Router();

router.get("/", getPokemons);

router.get("/");

router.get("/:idPokemon", getIdPokemon);

router.post("/create", postPokemon);

module.exports = router;
