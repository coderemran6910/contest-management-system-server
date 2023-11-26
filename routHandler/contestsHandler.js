const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();
const contestsSchema = require('../schemas/contestsSchema');
const Contest = new mongoose.model('Contest', contestsSchema);




router.post('/', async(req, res) => {
     const newContest = new Contest(req.body);
     await newContest.save((err) => {
         if(err){
             res.status(500).json({message : err.message})
         }else{
             res.send(newContest)
         }
     });

})

module.exports = router