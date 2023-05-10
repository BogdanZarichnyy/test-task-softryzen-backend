const Joi = require('joi').extend(require('@joi/date'));
const regExp = require('../helpers/regExp');

const addMovieValidationSchema = Joi.object({
    title: Joi.string()
        .pattern(regExp.lettersAndDigitsRegExp)
        .min(2)
        .max(40)
        .required(),
    director: Joi.string()
        .pattern(regExp.stringRegExp)
        .min(2)
        .max(40)
        .required(),
    date: Joi.date()
        .format('DD-MM-YYYY')
        .utc()
        .required(),
});

const updateMovieValidationSchema = Joi.object({
    title: Joi.string()
        .pattern(regExp.lettersAndDigitsRegExp)
        .min(2)
        .max(40)
        .optional(),
    director: Joi.string()
        .pattern(regExp.stringRegExp)
        .min(2)
        .max(40)
        .optional(),
    date: Joi.date()
        .format('DD-MM-YYYY')
        .utc()
        .optional(),
});

module.exports = {
    addMovieValidationSchema,
    updateMovieValidationSchema,
};
