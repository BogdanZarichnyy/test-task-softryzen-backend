const Movie = require('../../models/movieModel');
const { createError } = require('../../helpers/createError');
const { formatDate } = require('../../helpers/formatDate');

const addMyMovie = async (req, res) => {
    const { _id } = req.user;

    const params = {
        ...req.body,
        date: formatDate(req.body.date),
    };

    const newMovie = await Movie.create({ ...params, owner: _id, });

    if (!newMovie) {
        throw createError({ status: 501 });
    }

    res.status(201).json({ message: 'Created new movie', movie: newMovie });
}

module.exports = addMyMovie;