

const mongoose = require("mongoose");
// const Messages = require("./Messages");

const chatSchema = new mongoose.Schema({
    
    users: [{
        type: mongoose.Types.ObjectId,
        ref: "User"

    }],
    name: {
        type: String,
    },
    messages: [{
        type: mongoose.Types.ObjectId,
        ref: "Messages",
    }],

    
},
{
        timestamps: true
    
    });


const Chat = mongoose.model("Chat", chatSchema)

module.exports = Chat;