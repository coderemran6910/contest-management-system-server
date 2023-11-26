const mongoose = require('mongoose');

const contestsSchema = mongoose.Schema({
    description : {type : String, required : true},
    image: {type : String},
    instruction: {type : String, required : true},
    name: {type : String, required : true},
    price: {type : Number, required : true},
    prize: {type : Number, required : true},
    type: {type : String, required : true},
}) 

module.exports = contestsSchema




