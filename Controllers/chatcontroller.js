const express = require("express");

const { builtinModules } = require("module");

// const Chat = require("../models/Chat");

const {Chat, User, Messages } = require("../models")

const router = express.Router();

require("../config/db.connection")

router.use((req, res, next) => { 

	console.log('I run for all routes');    
	next();

});

router.use((req, res, next) => {    
	console.log(`${req.method} ${req.originalUrl}`);    
	next();
}); 


router.use((req, res, next) => {
    req.requestTime = new Date().toISOString() //this is method and we need to call that
    next()
  })
  




router.get("/", async (req, res, next) => {
    try {
        const chat = await Chat.find({}).populate("messages")
        res.status(200).json(chat)
    } catch (error) {
        res.status(400).json(error)
        next();
    }
})

router.post("/", async (req, res, next) => {
    try {
        const createdChat = await Chat.create(req.body)
        res.status(201).json(createdChat)
    } catch (error) {

        // console.log("catch", )

        res.status(400).json(error)
        next();
    }
})

router.post("/:id", async (req, res, next) => {
    try {
        const chat = await Chat.findById(req.params.id)
        const chatWithMessage = await Chat.populate("message")
        res.status(200).json(chatWithMessage)
    } catch (error) {
        res.status(400).json(error)
        next();
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const deletedChat = await Chat.findByIdAndRemove(req.params.id)
        
        res.status(202).json({message: `${deletedChat}`})
    } catch (error) {
        res.status(400).json(error)
        next();
    }
})

console.log()
module.exports = router
