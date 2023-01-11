const express = require("express");

const { builtinModules } = require("module");

const { Messages, Chat, User } = require("../models")

const router = express.Router();

require("../config/db.connection")

// https://project3-whatsapp.netlify.app/message 
// the ROUTE to GET all the message objects from the database
router.get("/", async (req, res, next) => {
    try {
        const messages = await Messages.findById(req.params.id).populate("user")
        res.status(200).json(messages)
    } catch (error) {
        console.log(error)
    }
})

// https://project3-whatsapp.netlify.app/message 
// the ROUTE to POST all the message objects to the database
router.post("/", async (req, res, next) => {
    try {
        const createdMessage = await Messages.create(req.body)
        res.status(201).json(createdMessage)
    } catch (error) {
        console.log(error)
    }
})

// https://project3-whatsapp.netlify.app/message/:id 
// the ROUTE to POST a message object to the database with a specific message:id
router.post("/:id", async (req, res, next) => {
    try {
        const messages = await Messages.findById(req.params.id)
        
        res.status(200).json(messages)
    } catch (error) {
        console.log(error)
    }
})

// https://project3-whatsapp.netlify.app/message/:id 
// the ROUTE to DELETE a message object from the database with a specific message:id
router.delete("/:id", async (req, res, next) => {
    try {
        const deletedMessages = await Messages.findByIdAndRemove(req.params.id)
        
        res.status(202).json({message: `${deletedMessages}`})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router
