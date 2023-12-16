const express = require('express');
const axios = require('axios');
const PokemonData = require('../models/PokemonData');
const Pokemon = require("../models/pokemon")

const router = express.Router();


router.get("/pokemons", async (req, res) => {
    try {
        const pokemons = await Pokemon.find();
        res.json(pokemons);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


module.exports = router;