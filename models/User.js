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
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%2Fimages%3Fk%3Ddefault%2Bprofile%2Bpicture&psig=AOvVaw2UQ3TWF5b0gwPmeQzg3B_a&ust=1673371938114000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCKjj-rCCu_wCFQAAAAAdAAAAABAE"
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