const mongoose = require("mongoose")

const pokemonSchema = mongoose.Schema({
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
    }
});


module.exports = mongoose.model("Pokemon", pokemonSchema);

