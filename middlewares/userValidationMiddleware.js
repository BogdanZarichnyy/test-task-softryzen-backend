const { registerUserValidationSchema, loginUserValidationSchema } = require('../validation/userValidation');

const registerUserValidation = (req, res, next) => {
    const validationResult = registerUserValidationSchema.validate(req.body);
    
    if (validationResult.error) {
        return res.status(400).json({ message: validationResult.error.message });
    }

    next();
}

const loginUserValidation = (req, res, next) => {
    const validationResult = loginUserValidationSchema.validate(req.body);
    
    if (validationResult.error) {
        return res.status(400).json({ message: validationResult.error.message });
    }

    next();
}

module.exports = {
    registerUserValidation,
    loginUserValidation
}