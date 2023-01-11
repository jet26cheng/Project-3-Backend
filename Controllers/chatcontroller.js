const express = require("express");

const { builtinModules } = require("module");

const {Chat, User, Messages } = require("../models")

const router = express.Router();

require("../config/db.connection")

// https://project3-whatsapp.netlify.app/chat/
// the ROUTE to GET all the chat objects from the database
router.get("/", async (req, res, next) => {
    try {
        const chat = await Chat.find({})
        res.status(200).json(chat)
    } catch (error) {
        console.log(error)
    }
})

// https://project3-whatsapp.netlify.app/chat/:id
// the ROUTE to GET a specific chat object from the database by the chat: id 
router.get("/:id", async (req, res, next) => {
    try {
        const chat = await Chat.findById(req.params.id).populate("messages")
        res.status(200).json(chat)
    } catch (error) {
        console.log(error)
    }
})
// https://project3-whatsapp.netlify.app/chat/:id
// the ROUTE to make a chat object in the database by that specific chat: id and adding the message object that the user has typed into the chat 
router.post("/:id", async (req, res, next) => {
    try {
        const chat = await Chat.findById(req.params.id)
        const chatWithMessage = await Chat.populate("message")
        res.status(200).json(chatWithMessage)
    } catch (error) {
        console.log(error)
    }
})

// https://project3-whatsapp.netlify.app/chat/
// the ROUTE to make a chat object in the database and updating both user objects which are referencing that specific chat that just been created 
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


// https://project3-whatsapp.netlify.app/chat/:id 
// the ROUTE to delete a chat object in the database by that chat:id 
router.delete("/:id", async (req, res, next) => {
	try {
		const deletedChat = await Chat.findByIdAndRemove(req.params.id);
		await User.findByIdAndUpdate(req.body[0], {
			$pull: { chats: { $in: [req.params.id] } },
		});
		await User.findByIdAndUpdate(req.body[1], {
			$pull: { chats: { $in: [req.params.id] } },
		});
		res.json(deletedChat);}
		catch (error) {
        console.log(error)
	}
})

// https://project3-whatsapp.netlify.app/chat/:id 
// the ROUTE to update an existing chat object in the database with every specific message object being typed by the user. 
router.put("/:id", async (req, res) => {
	try {
		createdMessage = await Messages.create(req.body);
        
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
