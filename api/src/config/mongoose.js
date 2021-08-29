// This file handles the connection logic of MongoDB database.

const mongoose = require('mongoose');
const { mongoURI } = require('./index');

mongoose.Promise = global.Promise;

mongoose.connect(mongoURI, { useNewUrlParser: true }).then(() => {
    console.log(`Connected to MongoDb successfully.`);
}).catch((error) => {
    console.log(`Error while attempting to connect to MongoDB`);
    console.log(error);
});

module.exports = { mongoose };
