const userModel = require('../models/user-model.js');
// app.get implementation
exports.getUsers = async(req, res) => {
    try {
	let users = await userModel.find();
	let {limit, skip} = req.query;

	limit = Number(limit);
	skip = Number(skip);

	if (isNaN(limit)) {
	    limit = users.length;
	}
	if (isNaN(skip)) {
	    skip = 0
	}

	let result = users.slice(skip, skip + limit);

	if (!users) {
	    return res.status(404).json({message: "Not Found"});
	}

	res.status(200).json({
	    message: "Successfull",
	    total: users.length,
	    count: result.length,
	    data: result
	});
    } catch(error) {
	res.status(500).json({message: "Error", error: error.message});
    }
};

// app.get by id implementation
exports.getUserById = async(req, res) => {
    try {
	let {id} = req.params;
	let user = await userModel.findOne({id: Number(id)});
	if (!user) {
	    return res.status(404).json({message: "user isn't found"});
	}
	res.status(200).json(user);
    } catch(error) {
	res.status(400).json({message: "failed"});
    }
};


// app.post implementation
exports.saveUser = async(req, res) => {
    try {
	const lastUser = await userModel.findOne().sort({id: -1});
	const nextId = lastUser ? lastUser.id + 1 : 1;
	const user = await userModel.create({
	    id: nextId,
	    userName: req.body.userName,
	    password: req.body.password,
	    firstName: req.body.firstName,
	    lastName: req.body.lastName
	});
	res.status(201).json(user);
    } catch (error) {
	res.status(400).json({message: "failed", error: error.message});
    }
};

// app.patch implementation
exports.updateUser = async(req, res) => {
    try {
	const {id} = req.params;
	const newUser = req.body;
	const user = await userModel.findOneAndUpdate({id: Number(id)}, newUser, {new: true});
	if (!user) {
	    return res.status(404).json({message: "failed to update"});
	}
	res.status(201).json({message: "updated sucessfully", data: newUser});
    } catch (error) {
	res.status(400).json({message: "failed", error: error.message});
    }
};


// app.delete implementation
exports.deleteUser = async(req, res) => {
    try {
	let {id} = req.params;
	let user = await userModel.findOneAndDelete({id: Number(id)});
	if (!user) {
	    return res.status(404).json({message: "this user isn't found"});
	}
	res.status(200).json({message: 'user deleted successfully', data: user});
    } catch(error) {
	res.status(500).json();
    }
}
