const express = require('express');

const { userAuthenticate } = require('../../middlewares/authenticateMiddleware');
const { registerUserValidation, loginUserValidation } = require('../../middlewares/userValidationMiddleware');
const controllerWrraper = require('../../helpers/controllerWrraper');
const { registrationUser, loginUser, getCurrentUser, logoutUser } = require('../../controllers/users');

const router = express.Router();

router.post('/registration', registerUserValidation, controllerWrraper(registrationUser));

router.post('/login', loginUserValidation, controllerWrraper(loginUser));

router.get('/current', userAuthenticate, controllerWrraper(getCurrentUser));

router.get('/logout', userAuthenticate, controllerWrraper(logoutUser));

module.exports = router;