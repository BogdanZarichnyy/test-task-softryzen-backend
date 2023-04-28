const express = require('express');

const { userAuthenticate } = require('../../middlewares/authenticateMiddleware');
const { addMyMovieValidation, updateMyMovieValidation } = require('../../middlewares/moviesValidationMiddleware');
const controllerWrraper = require('../../helpers/controllerWrraper');
const { getMyMovies, addMyMovie, updateMyMovieByID, deleteMyMovieByID } = require('../../controllers/movies');

const router = express.Router();

router.use(userAuthenticate);

router.get('/', controllerWrraper(getMyMovies));

router.post('/', addMyMovieValidation, controllerWrraper(addMyMovie));

router.put('/:movieId', updateMyMovieValidation, controllerWrraper(updateMyMovieByID));

router.delete('/:movieId', controllerWrraper(deleteMyMovieByID));

module.exports = router;