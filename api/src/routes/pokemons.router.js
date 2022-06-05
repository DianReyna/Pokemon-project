const { getPokemons } = require("../controllers/controllerPokemon.js");
const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  const { name } = req.query;
  try {
    let x = getPokemons();

    res.send(x);
  } catch (error) {}
});

router.get("/", (req, res) => {
  const { name } = req.query;
});

router.get("/:idPokemon", (req, res) => {
  const { idPokemon } = req.params;
});

router.post("/", (req, res) => {
  const { idPokemon } = req.params;
});

module.exports = router;
