require('dotenv').config();

const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected Successfully On Database')
    })
    .catch((error) => {
        console.log(error)
    })

const todoRoutes = require("./routes/todos.route.js");
const userRoutes = require("./routes/users.route.js");


const port = process.env.PORT;


app.use(express.static("./static"));

app.use("/todos", todoRoutes);
app.use("/users", userRoutes);

// if not found middleware
app.use((req, res) => {
    res.status(404).json({ message: `This ${req.url} Is Not Found...` });
});

app.listen(port, ()=>{
    console.log(`Listening sucessfully on port ${port}`);
});
