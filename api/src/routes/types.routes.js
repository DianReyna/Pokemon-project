const { getAllTypes } = require("../controllers/typeController.js");
const { Router } = require("express");
const router = Router();

router.get("/", getAllTypes);

module.exports = router;
