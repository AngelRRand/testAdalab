const express = require('express');
const pokemonSchema = require("../models/pokemon")

const router = express.Router();


router.post("/pokemon", (req, res) => {
    const pokemon = pokemonSchema(req.body);
    pokemon.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});


module.exports = router;