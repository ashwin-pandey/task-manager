// This file handles the connection logic of MongoDB database.

const mongoose = require('mongoose');
const { MONGO_URI } = require('./index');

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI, { useNewUrlParser: true }).then(() => {
    console.log(`Connected to MongoDb successfully.`);
}).catch((error) => {
    console.log(`Error while attempting to connect to MongoDB`);
    console.log(error);
});

module.exports = { mongoose };
