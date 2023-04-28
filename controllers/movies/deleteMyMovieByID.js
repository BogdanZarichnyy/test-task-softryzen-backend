const { isValidObjectId } = require('mongoose');
const Movie = require('../../models/movieModel');
const { createError } = require('../../helpers/createError');

const deleteMyMovieByID = async (req, res) => {
    const { _id } = req.user;
    const { movieId } = req.params;

    if (!isValidObjectId(movieId)) {
        throw createError({ status: 422 });
    }

    const data = await Movie.findOneAndRemove({ _id: movieId, owner: _id })
        .populate('owner', 'username email');

    if (!data) {
        throw createError({status: 404 });
    }

    res.status(200).json({
        message: 'Movie deleted',
        movie: data
    });
}

module.exports = deleteMyMovieByID;