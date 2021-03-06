const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const users = require('./routes/api/users')

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// DB Confi
const db = require('./config/keys').mongoUri;

// Connect to Mongo
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// use Routes
app.use('/api/items', items)
app.use('/api/users', users)

    const port = process.env.PORT || 5000

    app.listen(port, () => console.log(`Server started on PORT ${port}`));