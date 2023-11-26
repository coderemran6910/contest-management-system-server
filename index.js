require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000 ; // Choose the port you want to run your server on

app.use(express.json());
// Handler import
const contestsHandler = require('./routHandler/contestsHandler')

console.log(process.env.DB_USER);
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wmyy1wk.mongodb.net/?retryWrites=true&w=majority`;
// Database cunnect with mongoose 
mongoose.connect(uri)
.then(()=> console.log("database connected"))
.catch((err)=>console.log(err));


// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, this is your Express server!');
  });


//   All Router 
app.use('/contest', contestsHandler)
  




// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});