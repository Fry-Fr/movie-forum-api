const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const moviesRouter = require("./movies");

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/movies', moviesRouter);

server.get('/', (req, res) => {
    res.json({ api: 'up' });
});

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    });
});
module.exports = server;