const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   correctAns: {type: Number, default:0},
   incorrectAns: {type: Number, default:0},

})

const UserModel = mongoose.model("answersCount", userSchema) 

module.exports = {UserModel}