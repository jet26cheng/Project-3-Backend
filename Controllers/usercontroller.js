const express = require("express");
const cors = require("cors")
const { builtinModules } = require("module");

// const Chat = require("../models/Chat");

const { Messages, Chat, User } = require("../models")

const router = express.Router();

require("../config/db.connection")

// app.use(cors())

// router.use((req, res, next) => { 

// 	console.log('I run for all routes');    
// 	next();

// });

router.use((req, res, next) => {    
	console.log(`${req.method} ${req.originalUrl}`);    
	next();
}); 


router.use((req, res, next) => {
    req.requestTime = new Date().toISOString() //this is method and we need to call that
    next()
  })
  




router.get("/", cors(), async (req, res, next) => {
    try {
        const user = await User.find({})
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
})


router.get("/:id", async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).populate("chats")
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
})

// router.get("/:id", async (req, res) => {
// 	try {
// 		res.json(await User.findById(req.params.id).populate("chats"));
// 	} catch (error) {
// 		res.status(400).json(error);
// 	}
// });

router.post("/", async (req, res, next) => {
    try {
        const createdUser = await User.create(req.body)
        res.status(201).json(createdUser)
    } catch (error) {
        console.log(error)
    }
})

router.post("/:id", async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        const UserWithChat = await chat.populate("chat")
        res.status(200).json(UserWithChat)
    } catch (error) {
        console.log(error)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const deletedUser = await User.findByIdAndRemove(req.params.id)
        
        res.status(202).json({message: `${deletedUser}`})
    } catch (error) {
        console.log(error)
    }
})

router.put("/:id", async (req, res) => {
	try {
		createdMessage = await Message.create(req.body);
		res.json(
			await Chat.findByIdAndUpdate(req.params.id, {
				$push: {
					messages: createdMessage._id,
				},
				lastMessage: req.body.content,
			})
		);
	} catch (error) {
        console.log(error)
	}
});



module.exports = router