const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();
const contestsSchema = require('../schemas/contestsSchema');
const Contest = new mongoose.model('Contest', contestsSchema);




router.post('/', async(req, res) => {
     try {
        const newContest = new Contest(req.body);
        await newContest.save();
        res.send(newContest);
        console.log('contest saved successfully');
      } catch (error) {
        console.error('Error saving data:', error);
      }
})

router.get('/', async(req, res) => {
    try {
        const contests = await Contest.find();
        res.send(contests);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
})

router.get('/:id', async(req, res) => {
  const id = req.params.id;
  try {
    const contest = await Contest.findById(id);
    res.send(contest);
  }
  catch (error) {
    console.error('Error fetching data:', error);
  }
})


router.patch('/:id', async(req, res) => {
  const id = req.params.id;
  const alreadyConfirmed = await Contest.findOne({id : id, status : 'confirmed'});
  try{
      if(alreadyConfirmed){
          console.log("User already confirmed");
          return
      }

      const result = await Contest.findOneAndUpdate(
          { _id: id },
          { status: 'confirmed'},
          { new: true }
      )
        console.log("User status confirmed");
        res.send(result);
  }
  catch(error){
      console.error('Error fetching data:', error);
  }
})


router.delete('/:id', async(req, res) => {
  const id = req.params.email;
  try {
    const  result = await Contest.findOneAndDelete(id);
    console.log("Contest delete success");
    res.send(result);
  }
  catch (error) {
    console.error('Error fetching data:', error);
  }
})



module.exports = router