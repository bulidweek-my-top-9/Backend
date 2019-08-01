const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const userRouter = require("./users/user-router.js");
const musicRouter = require("./music/music-router.js");
const moviesRouter = require("./movies/movies-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/users", userRouter);
server.use("/api/music", musicRouter);
server.use("/api/movies", moviesRouter);

module.exports = server;