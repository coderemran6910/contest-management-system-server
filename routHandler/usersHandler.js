const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();
const userScema = require('../schemas/usersSchema');
const UserModel = new mongoose.model('User', userScema);

router.post('/', async(req, res) => {
    try {
        const alreadyUser = await UserModel.findOne({email : req.body.email});
        if(alreadyUser){
            console.log("User already exists");
            return
        }
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
  try {
    const user = await UserModel.findOneAndDelete(email);
    console.log("user delete success");
    res.send(user);
  }
  catch (error) {
    console.error('Error fetching data:', error);
  }
})

// User role update 
router.patch('/:email', async(req, res) => {
    const email = req.params.email;
    const alreadyCreator = await UserModel.findOne({email : email, role : 'creator'});
    try{
        if(alreadyCreator){
            console.log("User already creator");
            return
        }

        const result = await UserModel.findOneAndUpdate(
            { email: email },
            { role: 'creator' },
            { new: true }
          );
          console.log("User role update success", result);
          res.send(result);
    }
    catch(error){
        console.error('Error fetching data:', error);
    }
})

module.exports = router