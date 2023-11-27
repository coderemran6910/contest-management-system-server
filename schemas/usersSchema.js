const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {type : String, required : true},
    email: {type : String, required : true},
    image: {type : String},
    role: {type : String, enum : ['admin', 'user'], default : 'user'}
}) 

module.exports = userSchema