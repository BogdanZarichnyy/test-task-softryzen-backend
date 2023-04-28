const getMyMovies = require('./getMyMovies');
const getMyMovieById = require('./getMyMovieById');
const addMyMovie = require('./addMyMovie');
const updateMyMovieByID = require('./updateMyMovieByID');
const deleteMyMovieByID = require('./deleteMyMovieByID');

module.exports = {
    getMyMovies,
    getMyMovieById,
    addMyMovie,
    updateMyMovieByID,
    deleteMyMovieByID
}