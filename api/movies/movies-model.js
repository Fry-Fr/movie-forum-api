const db = require('../../data/dbConfig');
module.exports = {
    getAll,
    insertMovie
}

function getAll() {
    return db('movies');
};

function insertMovie(movie) {
    return db('movies').insert(movie);
};
