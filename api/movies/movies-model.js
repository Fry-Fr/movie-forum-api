const db = require('../../data/dbConfig');
module.exports = {
    getAll,
    insertMovie,
    deleteMovie
}

function getAll() {
    return db('movies');
};

function insertMovie(movie) {
    return db('movies').insert(movie);
};

function deleteMovie(id) {
    return db('movies').where({ 'movie_id': id }).del();
}
