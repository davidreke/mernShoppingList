const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/Items')
const app = express();
const path = require('path');

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

    

// use Route
app.use('/api/items', items);

// added code from youtube comments
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Server static assets if in production
if(process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'))

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    } )
}

const port = process.env.PORT || 5000;


 app.listen(port, () => console.log(`server started on port ${port}`))


