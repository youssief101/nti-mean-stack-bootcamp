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
    email: {
	type: String,
	required: true,
	unique: true
    },
    password: {
	type: String,
	minLength: 8,
	required: true,	
    },
    lastName: {
	type: String,
	required: true,
	minLength: [3, 'lastName is at least 3 chars'],
	maxLength: [15, 'lastName is at most 15 chars']
    },
    firstName: {
	type: String,
	required: true,
	minLength: [3, 'firstName is at least 3 chars'],
	maxLength: [15, 'firstName is at most 15 chars']
    },
    role: {
	type: String,
	enum: ['admin', 'user'],
	default: 'user'
    },
    refreshToken: {
	type: String
    },

    dob: {
	type: Date,
    },
    createdAt: {
	type: Date,
    },
    updatedAt: {
	type: Date,
    }
}, {timestamps: true});

// hash the password whenever is set/ changed
userSchema.pre('save', async function(){
    if (!this.isModified('password')) return;

    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
