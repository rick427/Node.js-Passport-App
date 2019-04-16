const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');

const app = express();

//Db config
const db = require('./config/keys').MongoURI;

//Connect to mongo
mongoose.connect(db, {useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

//ejs middleware
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));