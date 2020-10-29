const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/Items')

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI

// connect to MongoDB

mongoose.connect(db)
    .then(() => {
        console.log('mongoDB Connected...')
    })
    .catch((err) => {
        console.log(err)
    });

    const port = process.env.PORT || 5000;

// use Route
app.use('/api/items', items);


    app.listen(port, () => console.log(`server started on port ${port}`))


