//const { Sequelize } = require("sequelize");
const { Type } = require("../db");
const axios = require("axios");

const getAllTypes = async (req, res) => {
  const types = await axios.get("https://pokeapi.co/api/v2/type");

  for (let i = 0; i < types.data.results.length; i++) {
    let type = types.data.results[i].name;
    await Type.findOrCreate({ where: { name: type } });
  }

  const alltypes = await Type.findAll();

  res.send(alltypes);
};
module.exports = { getAllTypes };
