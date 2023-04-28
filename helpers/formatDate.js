const { createError } = require('./createError');

function formatDate(date) {
    const formatDate = date.split('-').reverse().join('-');
    const transformDate = new Date(formatDate);
    if (transformDate > new Date()) {
        throw createError({ status: 400, message: 'The exit date cannot be greater than today\'s date' });
    }
    return formatDate;
}

module.exports = {
    formatDate
};