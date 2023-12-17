// Imports
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose")
const pokemonRoutes = require("./routes/pokemon")
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json())
app.use("/api", pokemonRoutes)

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("successful connection"))
    .catch(() => console.log("failed connection"))
;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
