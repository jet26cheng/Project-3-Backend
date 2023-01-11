const mongoose = require("mongoose");

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
        ref: "Chat",
    }],
    image: {
        type: String,
        default:"https://as2.ftcdn.net/v2/jpg/02/15/84/43/1000_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
    },
    displayname: {
        type: String,
        default: ""
    }
},
    {
        timestamps: true
    
    });

const User = mongoose.model("User", userSchema)

module.exports = User;