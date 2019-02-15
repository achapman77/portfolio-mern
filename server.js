const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const routes = require('./routes')
const app = express();
const PORT = process.env.PORT || 5000;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  } 

// Use morgan logger for logging requests
app.use(logger("dev"));

// Add routes, both API and view
app.use(routes);

//If deployed, use the deployed database.  Otherwise use the local mongo database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/portfolio-mern"

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true  })
  .then(() => console.log('MongoDB Connected...'))

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });