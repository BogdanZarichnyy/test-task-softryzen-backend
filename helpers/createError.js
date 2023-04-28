const messages = {
    400: 'Bad Request',
    401: 'Not authorized',
    402: 'Email or password is wrong',
    403: 'Forbidden',
    404: 'Not Found',
    409: 'Conflict - Email in use',
    422: 'ID is not valid for MongoDB documents, please enter correct movieId',
    423: 'Unauthorized',
    501: 'Movie creation error',
    502: 'Movie update error or movie with such ID is not found',
};

function createError({ status, message = messages[status] }) {
    const error = new Error(message);

    error.status = status;

    return error;
}

module.exports = {
    createError
};