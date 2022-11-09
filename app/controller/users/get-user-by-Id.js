'use strict';
const User = require('../../model/users');

const getUserById = async (req, res) => {
    try {
        const { id } = req?.params;
        const getUserById = await User.find({ status: true, _id: id }, { password: 0, email: 1, userName: 1, mobile: 1, name: 1, status: 1 });
        return res.status(200).json({
            status: 200,
            message: 'User Fetched Successfully',
            userDetails: getUserById
        });

    } catch (error) {
        return res.status(409).json({
            status: 409,
            message: 'Failed to fetch all users details'
        });
    }
}

module.exports = getUserById;