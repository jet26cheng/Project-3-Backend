

// initialize .env variables

require("dotenv").config();


// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT, MONGODB_URI } = process.env;

// importing 


const express = require("express");

const app = express()

const morgan = require("morgan");






app.get("/", (req, res) => {
    res.status(200).send("hello World");
});






app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));