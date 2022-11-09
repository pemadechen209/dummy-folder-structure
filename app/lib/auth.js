'use strict';

const TokenServ = require('./token');

function authorize() {
    return async (req, res, next) => {
        try {
            const token = (req?.headers?.authorization || req?.headers?.Authorization || '')
                .split('Bearer ').pop();

            if (!token) {
                return { message: 'Token Not Exist' };
            }

            const decodedData = await TokenServ.verify(token);
            req.tokenData = decodedData;
        } catch (error) {
            next(error);
        }
    };
}

module.exports = {
    authorize
};

