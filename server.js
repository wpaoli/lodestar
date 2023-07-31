const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const port = process.env.PORT || 3000;
const {errorHandler} = require('./middleware/errorMiddleware.js');

const connectDB = require('./config/db')

//Playng with the date stuff

//Import the function initially
// const {format} = require('date-fns');
// //today's date
// const today =format(new Date(),'dd.MM.yyyy');
// console.log(today);

// 👇️ Example date and time in UTC
const utcDate = '2022-11-02T03:51:06.441Z';

const date = new Date(utcDate);

// console.log(date.toLocaleString());


//playing with examples
let stringInput = "2021-06-10T02:20:50+00:00";
let timeZone = "America/Los_Angeles";
const dateObject = new Date(utcDate).toLocaleString("en-US", {
  timeZone,
});

console.log(dateObject); // Prints: 6/9/2021, 7:20:50 PM


connectDB()

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/ideas', require('./routes/ideaRoutes'));
app.use(errorHandler)




app.listen(port, () => console.log(`Server started on port ${port}`));


