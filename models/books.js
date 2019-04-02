const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    genre: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    authot: {
        type: String
    },
    publisher: {
        type: String
    },
    pages: {
        type: Number
    },
    image_url: {
        type: String
    },
    bay_url: {
        type: String
    },
});

const Book = module.exports = mongoose.model('Book', bookSchema, 'books');

module.exports.getBooks = (callback, limit) => {
    Book.find(callback).limit(limit);
}

module.exports.getBookById = (id, callback) => {
    Book.findById(id, callback);
}

module.exports.addBook = (book, callback) => {
    Book.create(book, callback);
}

module.exports.updateBook = (id, book, options, callback) => {
    let query = { _id: id }
    let update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        authot: book.authot,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        bay_url: book.bay_url
    }
    Book.findByIdAndUpdate(query, update, options, callback);
}

module.exports.removeBook = (id, callback) => {
    let query = { _id: id };
    Book.remove(query, callback);
}