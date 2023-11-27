const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {type : String, required : true},
    email: {type : String}
}) 

module.exports = userSchema
