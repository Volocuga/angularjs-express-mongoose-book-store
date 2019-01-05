const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

Genre = require('./models/genres')
Book = require('./models/books')

// connect to Mongo
mongoose.connect('mongodb://localhost/bookstore');
const db = mongoose.connection;

app.get('/', (req, res) => {
  res.send('hello express app')
});

app.get('/api/genres', (req, res) => {
  Genre.getGenres((err, genres) => {
    if(err){throw err}
    res.json(genres)
  })
});

app.get('/api/books', (req, res) => {
  Book.getBooks((err, books) => {
    if(err){throw err}
    res.json(books)
  })
});

app.get('/api/books/:_id', (req, res) => {
  Book.getBookById(req.params._id,(err, book) => {
    if(err){throw err}
    res.json(book)
  })
});

app.listen(3000)
