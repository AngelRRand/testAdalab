const mongoose = require("mongoose")

const PokemonDataSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    types: {
        type: [String],
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    abilities: {
        type: [String],
        required: true
    },
    data: {
        height: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: true
        }
    },
    evolution: {
        levels: {
            type: [Number],
            required: true
        },
        evolutions: {
            type: [
                {
                    name: String,
                    imageUrl: String,
                    id: String
                }
            ],
            required: false
        }
    },
    stats: {
        type: [Number],
        required: true
    }
});
module.exports = mongoose.model("PokemonData", PokemonDataSchema);
