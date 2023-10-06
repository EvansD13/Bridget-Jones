const express = require('express');
const cors = require('cors');

const entryRouter = require('./routers/entries');

const api = express();

api.use(cors());
api.use(express.json());
api.use("/entries", entryRouter)

api.get("/", (req, res) => {
    res.send("Welcome to a hidden diary")
})

module.exports = api;