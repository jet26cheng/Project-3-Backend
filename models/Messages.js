const mongoose = require("mongoose");
// const User = require("./User");

const messagesSchema = new mongoose.Schema({
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },
        content: {
            type: String,
            required: [true, "message is required"],
        },
        received: {
            type: Boolean,
            default: false
        },
    },
    { timestamps: true }
);

const Messages = mongoose.model("Messages", messagesSchema)

module.exports = Messages