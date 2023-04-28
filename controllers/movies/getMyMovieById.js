const Movie = require('../../models/movieModel');
const { isValidObjectId } = require('mongoose');
const { createError } = require('../../helpers/createError');

const getMyMovieById = async (req, res) => {
    const { _id } = req.user;
    const { movieId: id } = req.params;

    if (!isValidObjectId(id)) {
        throw createError({ status: 422 });
    }

    const data = await Movie.findOne({ _id: id, owner: _id })
        .populate('owner', 'username email');
    
    if (!data) {
        throw createError({ status: 502 });
    }

    res.status(201).json({ movie: data });
}

module.exports = getMyMovieById;