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


module.exports = router