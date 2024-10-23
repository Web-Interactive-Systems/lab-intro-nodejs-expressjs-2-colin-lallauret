const express = require("express");
const app = express();

const todos = require("../data/todos.json");

// Todo import `todos` from `../data/todos.json`
// todos will be used as an array of data

app.get("/ping", (req, res) => {
  res.json("pong");
});

// Todo: Implement an endpoint that handles two query parameters: 'limit' and 'search'
// Here are some examples:
//  /api/todos/?limit=30
//  /api/todos/?search='totam'
//  /api/todos/?limit=30&search='totam'
// The endpoint should filter and return todos based on 'limit' and 'search'
// limit: should limit the number of todos returned to the client to the value of limit
// search: should return only the todos that contains search text value in the title
app.get("/api/todos", (req, res) => {
  const { limit, search } = req.query;
  let response = todos;

  if (search) {
    response = response.filter((e) => e.title.includes(search));
  }

  const limitInt = +limit;

  if (limit) {
    if (typeof limitInt === "number" && !isNaN(limitInt)) {
      response = response.slice(0, limitInt);
    }
  }

  res.json(response);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000....");
});
