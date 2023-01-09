const express = require("express");

const { builtinModules } = require("module");

// const Chat = require("../models/Chat");

const { Messages, Chat, User } = require("../models")

const router = express.Router();

require("../config/db.connection")

// router.use((req, res, next) => { 

// 	console.log('I run for all routes');    
// 	next();

// });

// router.use((req, res, next) => {    
// 	console.log(`${req.method} ${req.originalUrl}`);    
// 	next();
// }); 


// router.use((req, res, next) => {
//     req.requestTime = new Date().toISOString() //this is method and we need to call that
//     next()
//   })
  




router.get("/", async (req, res, next) => {
    try {
        // const messages = await Messages.find({}).populate("user")
        const messages = await Messages.findById(req.params.id).populate("user")
        res.status(200).json(messages)
    } catch (error) {
        console.log(error)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const createdMessage = await Messages.create(req.body)
        res.status(201).json(createdMessage)
    } catch (error) {
        console.log(error)
    }
})

router.post("/:id", async (req, res, next) => {
    try {
        const messages = await Messages.findById(req.params.id)
        
        res.status(200).json(messages)
    } catch (error) {
        console.log(error)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const deletedMessages = await Messages.findByIdAndRemove(req.params.id)
        
        res.status(202).json({message: `${deletedMessages}`})
    } catch (error) {
        console.log(error)
    }
})


// router.put("/:id", async (req, res) => {
// 	try {
// 		createdMessage = await Message.create(req.body);
// 		res.json(
// 			await Chat.findByIdAndUpdate(req.params.id, {
// 				$push: {
// 					messages: createdMessage._id,
// 				},
// 				lastMessage: req.body.content,
// 			})
// 		);
// 	} catch (error) {
//         console.log(error)
// 	}
// });


module.exports = router
