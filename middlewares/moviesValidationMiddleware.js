const { addMovieValidationSchema, updateMovieValidationSchema } = require('../validation/moviesValidation');

const addMyMovieValidation = async (req, res, next) => {
    const validationResult = addMovieValidationSchema.validate(req.body);

    if (validationResult.error) {
        return res.status(400).json({ message: validationResult.error.message });
    }

    next();
}

const updateMyMovieValidation = async (req, res, next) => {    
    const validationResult = updateMovieValidationSchema.validate(req.body);

    if (validationResult.error) {
        return res.status(400).json({ message: validationResult.error.message });
    }

    next();
}

module.exports = {
    addMyMovieValidation,
    updateMyMovieValidation
}