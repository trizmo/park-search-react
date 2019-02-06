const express = require("express");
const router = express.Router();
const favoritesController = require("../../controllers/favoritesController")

// Iavorites Model
const Favorite = require("../../models/Favorite");

// GET api/items
// Get All Items

router.get("/api", (req, res) => {
  console.log("express router.get used")
  Favorite.find()
    .sort({ date: -1 })
    .then(favorites => res.json(favorites))
});


// POST api/items
// Create a Post
router.post("/api", (req, res) => {
  const newFave = new Fave({
    name: req.body.name
  });
  newFave.save().then(fave => res.json(fave));
})  


// DELETE api/items
// @Delete a Post
router.delete("/:id", (req, res) => {
  Favorite.findById(req.params.id)
    .then(favorite => favorite.remove().then(() => res.json({ success: true })))
    .catch(err => res.status((404).json({ success: false })))
});


module.exports = router;