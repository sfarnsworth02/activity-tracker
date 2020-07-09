const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {PORT} = require('./config');
const db = require('./db');

// defining the app
const app = express();
// starting the db connection
db();

/*
Middleware
*/
app.use(cors());
// use express json parser because body-parser sucks
app.use(express.json());
// request logger
// const requestLogger = (req, res, next) =>
// {
//     const now = new Date();
//     console.log(`${now}:::> Incoming request to ${req.originalUrl}`);
// }

// import DAO
const User = require('./api/user/user.dao');
const Activity = require('./api/activity/activity.dao');

// import essentials for router factory function
const routerFactory = require('./api/router');

/* --- Routes --- */
app.use('/', routerFactory(User));
app.use('/', routerFactory(Activity));


app.listen(PORT || 5050, (err) =>
{
    if(err)
    {
        console.log(`Error starting server on port ${PORT}: `, err);
    }
    console.log(`Server listening on port ${PORT}`);
});