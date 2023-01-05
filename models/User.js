const mongoose = require("mongoose");
// const Chat = require("./Chat");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username cannot be empty!"], 
    },
    password: {
        type: String, 
        required:[true, "Password is Required!"],
    },
    chats: [{
        type: mongoose.Types.ObjectId,
        ref: "Chat"
    }],
    image: {
        type: String,
        default:"../image/Default-Image.jpeg"
    },
    displayname: {
        type: String,
        default: null
    }
},
    {
        timestamps: true
    
    });

const User = mongoose.model("User", userSchema)

module.exports = User;