const Joi = require('joi');
const regExp = require('../helpers/regExp');

const registerUserValidationSchema = Joi.object({
    username: Joi.string()
        .pattern(regExp.nameRegExp)
        .min(1)
        .max(40)
        .required(),
    email: Joi.string()
        .email()
        .pattern(regExp.emailRegExp)
        .min(7)
        .max(63)
        .required(),
    password: Joi.string()
        .pattern(regExp.passwordRegExp)
        .min(7)
        .max(32)
        .required(),
});

const loginUserValidationSchema = Joi.object({
    email: Joi.string()
        .email()
        .pattern(regExp.emailRegExp)
        .min(7)
        .max(63)
        .required(),
    password: Joi.string()
        .pattern(regExp.passwordRegExp)
        .min(7)
        .max(32)
        .required(),
});

module.exports = {
    registerUserValidationSchema,
    loginUserValidationSchema
};
