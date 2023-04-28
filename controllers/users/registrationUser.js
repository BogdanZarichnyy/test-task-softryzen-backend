const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createError } = require('../../helpers/createError');
// const { randomUUID } = require('crypto');
const User = require('../../models/userModel');

const { JWT_ACCESS_SECRET_KEY } = process.env;

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    const normalizedEmail = email.toLowerCase();

    const findUser = await User.findOne({ email: normalizedEmail });

    if (findUser) {
        throw createError({ status: 409 });
    }

    const bcryptHashPassword = await bcrypt.hash(password, 10);

    // const verificationToken = randomUUID();

    const user = await User.create({
        username,
        email: normalizedEmail,
        password: bcryptHashPassword,
    });

    const userId = {
        id: user._id,
    };

    const accessToken = jwt.sign(userId, JWT_ACCESS_SECRET_KEY, {
        expiresIn: '1d',
    });

    const data = await User.findByIdAndUpdate(
        user._id,
        { accessToken },
        { new: true }
    ).select({ password: 0, createdAt: 0, updatedAt: 0 });

    res.status(201).json({
        message: `User ${data.username} registered`,
        user: data,
    });
};

module.exports = registerUser;