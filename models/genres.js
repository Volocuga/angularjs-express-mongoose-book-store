const mongoose = require('mongoose');
const genreSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

const Genre = module.exports = mongoose.model('Genre', genreSchema, 'genre');

module.exports.getGenres = (callback, limit) => {
    Genre.find(callback).limit(limit);
}

module.exports.addGenre = (genre, callback) => {
    Genre.create(genre, callback);
}

module.exports.updateGenre = (id, genre, options, callback) => {
    let query = {_id : id};
    let update = { name: genre.name }
    Genre.findByIdAndUpdate(query, update, options, callback);
}

module.exports.removeGenre = (id, callback) => {
    let query = {_id : id};
    Genre.remove(query, callback);
}
