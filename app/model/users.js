'use strict';

const { v4: uuid } = require('uuid');
const mongoose = require('mongoose');

const { Schema } = mongoose;
const options = {
    timestamps: true,
};

const getRequiredFiledMessage = (field) => {
    const message = `${field} Should Not Be Empty`;
    return [true, message];
};

const UserSchema = new Schema({
    id: { type: String, default: uuid, unique: true },
    name: {
        type: String,
        required: getRequiredFiledMessage('Name'),
        trim: true,
    },
    email: {
        type: String,
        required: getRequiredFiledMessage('Email'),
        trim: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: getRequiredFiledMessage('Mobile'),
        trim: true,
        unique: true,
    },
    username: {
        type: String,
        required: getRequiredFiledMessage('Username'),
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: getRequiredFiledMessage('Password'),
        trim: true,
    }, status: {
        type: Boolean,
        default: true
    }
}, options);

module.exports = mongoose.model('User', UserSchema);
