const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();
const userScema = require('../schemas/usersSchema');
const UserModel = new mongoose.model('User', userScema);

router.post('/', async(req, res) => {
    try {
        const newUser = new UserModel(req.body);
        await newUser.save();
        res.send(newUser);
        console.log('User saved successfully');
      } catch (error) {
        console.error('Error saving data:', error);
      }
}) 

module.exports = router