const { Router } = require("express");
const pokemons = require("./pokemons.routes.js");
const types = require("./types.routes.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemons", pokemons);
router.use("/types", types);

module.exports = router;
