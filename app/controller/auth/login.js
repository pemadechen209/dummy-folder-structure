'use strict';

const User = require('../../model/users');
const { generate: generateToken } = require('../../lib/token');
const { match: matchPassword } = require('../../lib/password');

const login = async (req, res, next) => {
    try {
        let token;
        const user = await User.findOne({ email: req?.body?.email });
        if (!user) {
            return res.status(409).json({
                status: 409,
                message: 'Invalid user'
            });
        }

        const isPasswordMatched = await matchPassword(req?.body?.password, user?.password);

        if (!isPasswordMatched) {
            return res.status(409).json({
                status: 409,
                message: 'Invalid Password'
            });
        }

        const tokenPayload = {
            userId: user.id,
        };
        
        token = await generateToken(tokenPayload);
        return res.status(200).json({
            status: 200,
            message: 'User is logged in',
            token
        });
    } catch (error) {
        return res.status(409).json({
            status:409,
            message: error?.message? error?.message:'User failed to login '
        })
    }
};

module.exports = login;
