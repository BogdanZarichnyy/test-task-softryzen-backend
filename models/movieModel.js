const { Schema, model } = require('mongoose');
const regExp = require('../helpers/regExp');

const movieSchema = new Schema(
    {
        title: {
            type: String,
            match: regExp.lettersAndDigitsRegExp,
            minLength: 2,
            maxLength: 40,
            required: true,
        },
        director: {
            type: String,
            match: regExp.stringRegExp,
            minLength: 2,
            maxLength: 40,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
    },
    { versionKey: false, timestamps: true }
);

const Movie = model('movie', movieSchema);

module.exports = Movie;
