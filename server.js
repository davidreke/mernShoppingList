const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const config = require('config')

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = config.get('mongoURI');

// connect to MongoDB

mongoose.connect(db, {useNewUrlParser: true,
    useCreateIndex: true})
    .then(() => {
        console.log('mongoDB Connected...')
    })
    .catch((err) => {
        console.log(err)
    });

    

// use Route
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'))

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
