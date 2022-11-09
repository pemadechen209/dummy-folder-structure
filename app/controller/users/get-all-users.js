'use strict';
const User = require('../../model/users');

const getUsers = async (req, res) => {
    try {

        const getAllUser = await User.find({ status: true }, { password: 0, email: 1, userName: 1, mobile: 1, name: 1, status: 1 });
        console.log(getAllUser)
        return res.status(200).json({
            status: 200,
            message: 'User Fetched Successfully',
            userDetails: getAllUser
        });

    } catch (error) {
        return res.status(409).json({
            status: 409,
            message: 'Failed to fetch all users details'
        });
    }

}

module.exports = getUsers;