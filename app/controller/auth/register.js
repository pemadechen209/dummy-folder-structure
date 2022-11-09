'use strict';

const User = require('../../model/users');
const { hash: hashPassword } = require('../../lib/password');

const signup = async (req, res, next) => {
    try {
        req.body.password = await hashPassword(req?.body?.password);
        const user = new User(req?.body);
        await user.save();
        return res.status(200).json({
            status: 200,
            message: 'User registered successfully'
        });
    } catch (error) {
        next(error);
    }
};

module.exports = signup;
