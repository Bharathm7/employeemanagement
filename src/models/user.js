const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    department: String,
    role: String
})
const userModel = mongoose.model("employees",UserSchema)
module.exports = userModel;
