const express = require('express');
const app = express();

app.use(express.json);

let todos = [];
let nextId = 1;

app.get("/todos", (req, res)=>{
    let {limit = 10, skip = 0} = req.query;
    limit = Number(limit);
    skip = Number(skip);

    const result = todos.slice(skip, skip + limit);
    res.status(200).json(result);
})


// get    => read data
// post   => inseret data
// put    => update data
// delete => delete data

// GET: www.google.com/api/orders    => gets all orders
// POST: www.google.com/api/orders   => place an order (send data)
// GET:  www.google.com/api/orders/:id => get single order (path params)
// PUT: www.google.com/api/orders/:id  => update a specific order (params + send data)
// DELETE: www.google.com/api/orders/:id   => delete order (path params)

