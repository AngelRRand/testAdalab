const express = require('express');
const axios = require('axios');
const PokemonData = require('../models/PokemonData');
const Pokemon = require("../models/pokemon")

const router = express.Router();


router.get("/pokemon", async (req, res) => {
    try {

        const {type} = req.query;
        if (type) {
            const pokemonsByType = await Pokemon.find({types: {$in: [type]}});
            res.json(pokemonsByType);
        } else {
            const pokemons = await Pokemon.find();
            res.json(pokemons);
        }

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get("/pokemon/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const pokemon = await PokemonData.find({"id": id});
        res.json(pokemon);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


module.exports = router;