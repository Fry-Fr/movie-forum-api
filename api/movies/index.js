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

router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    Movie.deleteMovie(id).then(response => {
        if (response === 0) {
            res.json({ message: 'No entry to remove.' })
        }else if (response === 1) {
            res.json({ message: 'Removed Successfully' })
        }
    }).catch(err => next(err))
});

module.exports = router;