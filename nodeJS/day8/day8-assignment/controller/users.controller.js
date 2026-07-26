const userModel = require('../models/user-model.js');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {promisify} = require('util');

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
	const existingEmail = await userModel.findOne({
	    email: req.body.email
	});
	if (existingEmail) {
	    return res.status(409).json({message: "duplicate email"}, {error: error.message});
	}
	const user = await userModel.create({
	    id: nextId,
	    userName: req.body.userName,
	    email: req.body.email,
	    password: req.body.password,
	    firstName: req.body.firstName,
	    lastName: req.body.lastName,
	    role: req.body.role
	});

	const {password, refreshToken, ...safeUser} = user.toObject();
	
	res.status(201).json(safeUser);
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
};

exports.login = async(req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
	return res.status(400).json({message: "You must provide email and password"});
    }

    try {
	const user = await userModel.findOne({email});
	if (!user) {
	    return res.status(404).json({message: "User Not Found!"});
	}

	const isValid = await bcryptjs.compare(password, user.password);
	if (!isValid) {
	    return res.status(400).json({message: "Invalid email or password"});
	}

	const payload = {
	    id: user.id,
	    userName: user.userName,
	    email: user.email,
	    role: user.role
	};

	const token = jwt.sign(payload, process.env.JWT_SECRET, {
	    expiresIn: process.env.JWT_EXPIRES_IN
	});
	const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
	    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN
	});

	user.refreshToken = refreshToken;
	await user.save({validateBeforeSave: false});

	res.status(200).json({message: "Success", token, refreshToken});
	
    } catch (error) {
	res.status(500).json({message: "Error", error: error.message});
    }
};

exports.refreshToken = async(req, res) => {
    const {refreshToken} = req.body;

    if (!refreshToken) {
	return res.status(400).json({message: "You must provid a refreshToken"});
    }

    try {
	const decoded = await promisify(jwt.verify)(refreshToken, process.env.JWT_REFRESH_SECRET);
	const user = await userModel.findOne({id: decoded.id});

	if (!user || user.refreshToken !== refreshToken) {
	    return res.status(401).json({message: "Refresh token doesn't match"});
	}

	const token = jwt.sign(
	    {
		id: user.id,
		userName: user.userName,
		email: user.email,
		role: user.role
	    },
	    process.env.JWT_SECRET,
	    {expiresIn: process.env.JWT_EXPIRES_IN}
	);

	res.status(200).json({message: "Success", token});
    } catch (error) {
	res.status(401).json({message: "Invalid or expired refresh token"});
    }
};
