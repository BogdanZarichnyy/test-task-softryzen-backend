const Movie = require('../../models/movieModel');

const getMyMovies = async (req, res) => {
    const { _id } = req.user;
    const { page = 1, limit = 16, query = '' } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const data = await Movie.find({ owner: _id, title: { $regex: new RegExp(query, 'i') } })
        .populate('owner', 'username email')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

    res.status(200).json(data);
}

module.exports = getMyMovies;