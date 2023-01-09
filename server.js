


// initialize .env variables



require("./config/db.connection");

require("dotenv").config();


// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT, MONGODB_URI } = process.env;

// importing 

const cors = require("cors");

const express = require("express");

// const router = express.Router();

// router.use(cors());


// app.use(cors())

// app.options('*',cors())

const app = express()

// const Messages = require("./models/messages");

const chatController = require("./Controllers/chatcontroller.js")

const userController = require("./Controllers/usercontroller.js")

const messageContoller = require("./Controllers/messagecontroller.js");
const { Router } = require("express");


// Middleware 

app.use(express.json())


app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content -Type, Accept");
    next();

});


app.options('*',cors())





// api routes 

app.use("/chat", chatController)
app.use((err, req, res, next) => res.status(500).send(err));

app.use("/user", userController)
app.use((err, req, res, next) => res.status(500).send(err));

app.use("/message", messageContoller)
app.use((err, req, res, next) => res.status(500).send(err));


app.all("/*", function (req, res) {
    return res.status(404).json({errata: 
    "No Resource Found Genius!" })
  })
  





app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));