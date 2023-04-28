const { Schema, model } = require('mongoose');
const regExp = require('../helpers/regExp');

const userSchema = new Schema(
    {
        username: {
            type: String,
            match: regExp.nameRegExp,
            minLength: 1,
            maxLength: 40,
            required: [true, 'Enter your username'],
        },
        email: {
            type: String,
            match: regExp.emailRegExp,
            minLength: 7,
            maxLength: 63,
            required: [true, 'Email is required'],
            unique: true,
        },
        password: {
            type: String,
            match: regExp.passwordRegExp,
            required: [true, 'Set password for user'],
        },
        accessToken: {
            type: String,
            default: '',
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const User = model('user', userSchema);

module.exports = User;
