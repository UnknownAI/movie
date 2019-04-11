const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/moviesDB', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

//init routes
app.use('/api', require('./routes/api'));

//error handling middleware
app.use(function(err, req, res, next){
  res.status(422).send({error: err.message});
});


app.listen(process.env.port || 4000, function(){
  console.log("Hello, now listening for request ")
})
