const express = require("express");

const { builtinModules } = require("module");

// const Chat = require("../models/Chat");

const { Messages, Chat, User } = require("../models")

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
        const user = await User.find({}).populate("chats")
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)
        next();
    }
})

router.post("/", async (req, res, next) => {
    try {
        const createdUser = await User.create(req.body)
        res.status(201).json(createdUser)
    } catch (error) {
        res.status(400).json(error)
        next();
    }
})

router.post("/:id", async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        const UserWithChat = await chat.populate("chat")
        res.status(200).json(UserWithChat)
    } catch (error) {
        res.status(400).json(error)
        next();
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const deletedUser = await User.findByIdAndRemove(req.params.id)
        
        res.status(202).json({message: `${deletedUser}`})
    } catch (error) {
        res.status(400).json(error)
        next();
    }
})

module.exports = router