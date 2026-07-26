const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const userSchema = mongoose.Schema({
    id: {
	type: Number,
	required: true,
	unique: true
    },
    userName: {
	type: String,
	required: true,
	minLength: [8, 'username is at least 8 chars'],
	maxLength: [20, 'username is at most 20 chars']
    },
    password: {
	type: String,
	required: true,	
    },
    firstName: {
	type: String,
	required: true,
	minLength: [3, 'firstName is at least 3 chars'],
	maxLength: [15, 'firstName is at most 15 chars']
    },
    lastName: {
	type: String,
	required: true,
	minLength: [3, 'lastName is at least 3 chars'],
	maxLength: [15, 'lastName is at most 15 chars']
    },
    dob: {
	type: Date,
	default: Date.now
    },
    createdAt: {
	type: Date,
	default: Date.now
    },
    updatedAt: {
	type: Date,
	default: Date.now
    }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
