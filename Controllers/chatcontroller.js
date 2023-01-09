const express = require("express");

const { builtinModules } = require("module");

// const Chat = require("../models/Chat");

const {Chat, User, Messages } = require("../models")

const router = express.Router();

require("../config/db.connection")

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
  




router.get("/", async (req, res, next) => {
    try {
        const chat = await Chat.find({})
        res.status(200).json(chat)
    } catch (error) {
        console.log(error)
    }
})


router.get("/:id", async (req, res, next) => {
    try {
        const chat = await Chat.findById(req.params.id).populate("messages")
        res.status(200).json(chat)
    } catch (error) {
        console.log(error)
    }
})

// router.post("/", async (req, res, next) => {
//     try {
//         const createdChat = await Chat.create(req.body)
//         res.status(201).json(createdChat)
//     } catch (error) {

//         // console.log("catch", )

//         res.status(400).json(error)
//         next();
//     }
// })

router.post("/:id", async (req, res, next) => {
    try {
        const chat = await Chat.findById(req.params.id)
        const chatWithMessage = await Chat.populate("message")
        res.status(200).json(chatWithMessage)
    } catch (error) {
        console.log(error)
    }
})

//Create a chat but also link it to the users
router.post("/", async (req, res) => {
	try {
		console.log(req.body);
		createdChat = await Chat.create(req.body);
		console.log(req.body.users[0]);
		await User.findByIdAndUpdate(req.body.users[0].userid, {
			$push: {
				chats: createdChat._id,
			},
		}),
			await User.findByIdAndUpdate(req.body.users[1].userid, {
				$push: {
					chats: createdChat._id,
				},
			});
		res.json(createdChat);
	} catch (error) {
        console.log(error)
	}
});

router.delete("/:id", async (req, res, next) => {
    try {
        const deletedChat = await Chat.findByIdAndRemove(req.params.id)
        
        res.status(202).json({message: `${deletedChat}`})
    } catch (error) {
        console.log(error)
    }
})

// //add message (in chats controller)
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

console.log()
module.exports = router
