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

router.get('/', async(req, res) => {
    try {
        const users = await UserModel.find();
        res.send(users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
})

router.delete('/:email', async(req, res) => {
  const email = req.params.email;
  console.log(email);
  try {
    const user = await UserModel.findOneAndDelete(email);
    console.log("user delete success");
    res.send(user);
  }
  catch (error) {
    console.error('Error fetching data:', error);
  }
})

module.exports = router