const router = require("express").Router();
const routes = require("./books");

// Book routes
router.use("/books", routes);

module.exports = router;
