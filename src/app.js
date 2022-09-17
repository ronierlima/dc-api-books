const express = require('express');
const app = express();

const booksRoute = require('./routes/booksRoute');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', booksRoute);

module.exports = app;