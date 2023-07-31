const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const port = process.env.PORT || 3000;
const {errorHandler} = require('./middleware/errorMiddleware.js');

const connectDB = require('./config/db')


connectDB()

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/ideas', require('./routes/ideaRoutes'));
app.use(errorHandler)




app.listen(port, () => console.log(`Server started on port ${port}`));


