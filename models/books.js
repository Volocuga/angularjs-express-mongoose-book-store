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
        type: String,
        require: true
    },
    publisher: {
        type: String,
        require: true
    },
    pages: {
        type: Number,
        require: true
    },
    image_url: {
        type: String,
        require: true
    },
    bay_url: {
        type: String,
        require: true
    },
});

const Book = module.exports = mongoose.model('Book', bookSchema, 'books');

module.exports.getBooks = (callback, limit) => {
    Book.find(callback).limit(limit);
}

module.exports.getBookById = (id, callback) => {
    Book.findById(id, callback);
}