

const mongoose = require("mongoose");


const chatSchema = new mongoose.Schema({
    
    users: [{
			name: String,
			userid: { type: mongoose.Types.ObjectId, ref: "User", require: true },
		},],
    name: {
        type: String,
    },
    messages: [{
        type: mongoose.Types.ObjectId,
        ref: "Messages",
    }],
    lastmessage: {
        type: String,
    },

    
},
{
        timestamps: true
    
    });


const Chat = mongoose.model("Chat", chatSchema)

module.exports = Chat;