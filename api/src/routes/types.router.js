const {} = require("../controllers/controllerType.js");
const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  const { name } = req.body;
});

module.exports = router;
