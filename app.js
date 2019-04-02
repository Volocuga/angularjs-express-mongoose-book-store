const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express(); 

Genre = require('./models/genres');
Book = require('./models/books');

app.use(express.static(__dirname+'/client')); 
app.use(bodyParser.json());  

// connect to Mongo
mongoose.connect('mongodb://localhost/bookstore', { useNewUrlParser: true });
// const db = mongoose.connection;
  
app.get('/', (req, res) => {
  res.send('hello express app, Home page')
});

app.get('/api/genres', (req, res) => {
  Genre.getGenres((err, genres) => {
    if(err){throw err} 
    res.json(genres)
  })
}); 

app.post('/api/genres', (req, res) => {
  let genre = req.body
  Genre.addGenre(genre, (err, genre) => {
    if(err){throw err}
    res.json(genre)
  })
});

app.put('/api/genres/:_id', (req, res) => {
  let genre = req.body
  let id = req.params._id
  Genre.updateGenre(id, genre, {}, (err, genre) => {
    if(err){throw err}
    res.json(genre)
  })
});

app.delete('/api/genres/:_id', (req, res) => {
  let id = req.params._id
  Genre.removeGenre(id, (err, genre) => {
    if(err){throw err}
    res.json(genre)
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

app.post('/api/books', (req, res) => {
  let book = req.body
  Book.addBook(book, (err, book) => {
    if(err){throw err}
    res.json(book)   
  })
});

app.put('/api/books/:_id', (req, res) => {
  let book = req.body
  let id = req.params._id
  Book.updateBook(id, book, {}, (err, book) => {
    if(err){throw err}
    res.json(book)
  })
});

app.delete('/api/books/:_id', (req, res) => {
  let id = req.params._id
  Book.removeBook(id, (err, book) => {
    if(err){throw err}
    res.json(book)
  })
});

app.listen(3000)  
