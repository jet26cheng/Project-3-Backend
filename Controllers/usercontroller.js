const express = require("express");
const { builtinModules } = require("module");

const { Messages, Chat, User } = require("../models")

const router = express.Router();

require("../config/db.connection")


// https://project3-whatsapp.netlify.app/user
// the ROUTE to GET all user objects from the database
router.get("/", async (req, res, next) => {
    try {
        const user = await User.find({})
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
})

// https://project3-whatsapp.netlify.app/user/:id
// the ROUTE to GET a user objects from the database with a specific user/:id
router.get("/:id", async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).populate("chats")
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
})

// https://project3-whatsapp.netlify.app/user/
// the ROUTE to POST all user objects to the database
router.post("/", async (req, res, next) => {
    try {
        const createdUser = await User.create(req.body)
        res.status(201).json(createdUser)
    } catch (error) {
        console.log(error)
    }
})


// https://project3-whatsapp.netlify.app/user/:id
// the ROUTE to make a user object to the database by specific user/:id
router.post("/:id", async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        const UserWithChat = await chat.populate("chat")
        res.status(200).json(UserWithChat)
    } catch (error) {
        console.log(error)
    }
})

// https://project3-whatsapp.netlify.app/user/:id
// the ROUTE to DELETE a user object to the database by specific user/:id
router.delete("/:id", async (req, res, next) => {
    try {
        const deletedUser = await User.findByIdAndRemove(req.params.id)
        
        res.status(202).json({message: `${deletedUser}`})
    } catch (error) {
        console.log(error)
    }
})

// https://project3-whatsapp.netlify.app/user/:id
// the ROUTE to update a user object to the database by specific user/:id with the following objects in the user like the chat object and the message objects 
router.put("/:id", async (req, res) => {
	try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, 
            req.body, {
                new: true,
        });
       res.status(201).json(updatedUser)
	} catch (error) {
        console.log(error)
	}
});



module.exports = router