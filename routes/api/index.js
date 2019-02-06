const router = require("express").Router();
const favoritesRoutes = require("./favorites");

router.use("/favorites", favoritesRoutes);
console.log("ROUTER USED")

module.exports = router;
