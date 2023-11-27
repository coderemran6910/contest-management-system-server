require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000 ;
const cors = require('cors'); 


// Handler import
const contestsHandler = require('./routHandler/contestsHandler')
const usersHandler = require('./routHandler/usersHandler')

// Middleware
app.use(express.json());
app.use(cors());
console.log(process.env.DB_USER);
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wmyy1wk.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri)
.then(()=> console.log("database connected"))
.catch((err)=>console.log(err));


// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, this is Contest  server!');
  });


//   All Router 
app.use('/contests', contestsHandler)
app.use('/users', usersHandler)
  




// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});