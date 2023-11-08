const router = require("express").Router();

const getrisktolerance = require("../controllers/portfolioController");

router.get("/:risktolerance", getrisktolerance);

module.exports = router;
