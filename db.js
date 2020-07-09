const mongoose = require('mongoose');
const { DB } = require('./config');

module.exports = function()
{
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
    mongoose.connect(DB)
    .then((result) =>
    {
        return result;
    })
    .catch((err) =>
    {
        console.log('Error connecting to db: ', err);
    });

    mongoose.connection.on('connected', function(){
        console.log(`Mongoose connected to the database`);
    });
    mongoose.connection.on('error', function(err){
        console.log('Mongoose encountered while connecting: ', err);
    });
    mongoose.connection.on('disconnected', function(){
        console.log('Mongoose connection was disconnected');
    });
    
    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log('Mongoose connection closed due to server interruption');
            process.exit(0);
        });
    });
}