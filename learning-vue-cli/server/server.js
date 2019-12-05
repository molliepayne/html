const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/tickets', {
  useNewUrlParser: true
});

const tickets = require("./tickets.js");
app.use("/api/tickets", tickets);

app.listen(3000, () => console.log('Server listening on port 3000!'));