const fs = require("fs");
let [, , command, entry, edit] = process.argv

if (command == "add") {
    let todos = JSON.parse(fs.readFileSync('todos.json', {encoding: "utf-8"}));
    let nextId = 1;
    if (todos.length) {
	nextId = todos[todos.length - 1].id + 1
    }
    todos.push({id: nextId, entry: entry});
    fs.writeFileSync("todos.json", JSON.stringify(todos));
} else if (command == "list") {
    let todos = JSON.parse(fs.readFileSync('todos.json', {encoding: "utf-8"}));
    console.log(todos);
} else if (command == "edit") {
    let todos = JSON.parse(fs.readFileSync('todos.json', {encoding: "utf-8"}));
    let todo = todos.find(todo => todo.id === Number(entry));
    if (todo) {
	todo.entry = edit;
	fs.writeFileSync("todos.json", JSON.stringify(todos));
    }
} else if (command == "delete") {
    let todos = JSON.parse(fs.readFileSync('todos.json', {encoding: "utf-8"}));
    let todo = todos.find(todo => todo.id === Number(entry));
    if (todo) {
	delete todo.entry;
	fs.writeFileSync("todos.json", JSON.stringify(todos));
    }
}

// [{id: 1, entry: entry}]
