
require("./config/db.connection");

require("dotenv").config();


// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT, MONGODB_URI } = process.env;

// importing 


const cors = require("cors");

const express = require("express");

const app = express()

app.use((req, res, next) => { 

	console.log('I run for all routes');    
	next();
});

app.use((req, res, next) => {    
	console.log(`${req.method} ${req.originalUrl}`);    
	next();
}); 

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString() //this is method and we need to call that
    next()
  })
  
  app.use(express.json())

  app.use(cors())
  
  app.use(morgan("dev"));

const chatController = require("./Controllers/chatcontroller.js")

const userController = require("./Controllers/usercontroller.js")

const messageContoller = require("./Controllers/messagecontroller.js");

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