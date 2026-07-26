const todoModel = require('../models/todo-model.js')
// app.get implementation
exports.getToDos = async(req, res) => {
    try {
	let todos = await todoModel.find();
	let {limit, skip} = req.query;

	limit = Number(limit);
	skip = Number(skip);

	if (isNaN(limit)) {
	    limit = todos.length;
	}
	if (isNaN(skip)) {
	    skip = 0;
	}

	let result = todos.slice(skip, skip + limit);

	if (!todos) {
	    return res.status(404).json({message: "Not Found"});
	}

	res.status(200).json({
	    message: "Sucessfull",
	    total: todos.length,
	    count: result.length,
	    data: result
	});
	
    } catch(error) {
	res.status(500).json({message: "Error", error: error.message});
    }
};


// app.get by id implementation
exports.getToDoById = async(req, res) => {
    try {
	let {id} = req.params;
	let todo = await todoModel.findOne({id: Number(id)});
	if (!todo) {
	    return res.status(404).json({message: "Todo isn't found!"});
	}
	res.status(200).json(todo);
    } catch(error) {
	res.status(400).json({message: "failed"});
    }
};


// app.post implementation
exports.saveToDo = async(req, res) => {
    try {
	const lastTodo = await todoModel.findOne().sort({id: -1});
	const nextId = lastTodo ? lastTodo.id + 1: 1;

	const todo = await todoModel.create({
	    id: nextId,
	    title: req.body.title,
	    status: req.body.status
	});

	res.status(201).json(todo);
    } catch(error) {
	res.status(400).json({message: "failed", error: error.message});
    }
};

// app.patch implementation
exports.updateToDo = async(req, res) => {
    try {
	const {id} = req.params;
	const newTodo = req.body;
	const todo = await todoModel.findOneAndUpdate({id: Number(id)}, newTodo, {new: true});
	console.log(todo);
	if (!todo) {
	    return res.status(404).json({message: "fail"});
	}
	res.status(201).json({message: "updated sucessfully", data: newTodo});
    } catch(error){
	res.status(400).json({message: "failed", error: error.message})
    }
};

// app.delete implementation
exports.deleteToDo = async(req, res) => {
    try {
	let {id} = req.params;
	let todos = await todoModel.find();
	let todo = await todoModel.findOneAndDelete({id: Number(id)});
	if (!todo) {
	    return res.status(404).json({message: "this todo isn't found"});
	}
	res.status(200).json({message: 'deleted successfully', data: todo});
	
    } catch(error) {
	res.status(500).json();
    }
};
