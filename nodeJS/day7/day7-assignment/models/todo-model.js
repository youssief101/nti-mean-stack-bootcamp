const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    id: {
	type: Number,
	required: true,
	unique: true
    },
    title: {
	type: String,
	required: true,
	minLength: [5, 'title is at least 5 chars'],
	maxLength: [20, 'title is at most 20 chars']
    },
    status: {
	type: String,
	enum: ['to-do', 'in progress', 'done'],
	default: 'to-do'
    },
    createdAt: {
	type: Date,
	default: Date.now // sets default value to current time
    },
    updatedAt: {
	type: Date,
	default: Date.now
    }
});
const todoModel = mongoose.model('Todo', todoSchema);

module.exports = todoModel;
