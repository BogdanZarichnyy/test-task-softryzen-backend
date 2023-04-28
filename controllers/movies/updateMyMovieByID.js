const Movie = require('../../models/movieModel');
const { isValidObjectId } = require('mongoose');
const { createError } = require('../../helpers/createError');
const { formatDate } = require('../../helpers/formatDate');
    
const updateMyMovieByID = async (req, res) => {
    const { movieId } = req.params;

    if (!isValidObjectId(movieId)) {
        throw createError({ status: 422 });
    }

    const params = {
        ...req.body,
        date: formatDate(req.body.date),
    };

    const updateAd = await Movie.findByIdAndUpdate(movieId, params, { new: true })
        .populate('owner', 'username email');
    
    if (!updateAd) {
        throw createError({ status: 502 });
    }

    res.status(201).json({ message: 'Updated movie', movie: updateAd });
}

module.exports = updateMyMovieByID;