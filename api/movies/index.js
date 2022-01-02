const router = require('express').Router();
const Movie = require('./movies-model');

router.get('/', (req, res, next) => {
    Movie.getAll().then(movies => {
        res.json(movies)
    })
});

router.post('/', (req, res, next) => {
    Movie.insertMovie(req.body).then(response => {
        res.json(response)
    }).catch(err => next(err))
});

module.exports = router;