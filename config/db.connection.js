const mongoose = require("mongoose");

const { MONGODB_URI } = process.env;

mongoose.set("strictQuery", true);

mongoose.connect(MONGODB_URI);

mongoose.connection.on("open", () => console.log("You are connected to MongoDB"))

mongoose.connection.on("close", () => console.log("You are disconnected to MongoDB"))

mongoose.connection.on("error", (err) => console.log(err))

