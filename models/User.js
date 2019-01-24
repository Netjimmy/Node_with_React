const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

// create class in Mongodb
mongoose.model("users", userSchema);
