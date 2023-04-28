const nameRegExp = require('./nameRegExp');
const emailRegExp = require('./emailRegExp');
const passwordRegExp = require('./passwordRegExp');
const lettersAndDigitsRegExp = require('./lettersAndDigitsRegExp');
const stringRegExp = require('./stringRegExp');

const regExp = {
    nameRegExp,
    emailRegExp,
    passwordRegExp,
    lettersAndDigitsRegExp,
    stringRegExp
};

module.exports = regExp;
