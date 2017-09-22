const MONGO_URI = 'mongodb://heroku_cwlh9m9t:ljbf70arra23a0emh603htqju5@ds147304.mlab.com:47304/heroku_cwlh9m9t';

const mongoose = require('mongoose');

// Use your own promis library
mongoose.Promise = require('bluebird');

// connect to mongo, use Mongo Client
const db = mongoose.connect(MONGO_URI, { useMongoClient: true })
    .then(({ db: { databaseName } }) => console.log(`Connected to ${databaseName}`))
    .catch(err => console.error(err));


module.exports = db;
