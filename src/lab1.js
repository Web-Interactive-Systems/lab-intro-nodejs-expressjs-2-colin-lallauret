const express = require("express");
const app = express();

// Todo import `todos` from `../data/todos.json`
// todos will be used as an array of data
const todos = require("../data/todos.json");

app.get("/ping", (req, res) => {
  res.json("pong");
});

// Todo: complete this endpoint to return the json list of todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Todo: complete this endpoint to return the todo json object
// that correspond to a `todoId` parameter
// if the todoId does not exists return an http status of 404
// with "todo not found"
app.get("/todos/:todoId", (req, res) => {
  // Todo: console.log req
  // Check the log to see if you can identify an object
  // that holds the url parameter `todoId`
  const todo = todos.find((e) => e.id == req.params.todoId);

  if (todo) {
    res.json(todo);
  } else {
    res.status(404);
    res.json("todo not found");
  }
});

// Todo: complete this endpoint to return the todo json object
// that correspond to a `todoId` parameter and `userId`
// if the todoId or userId does not exists return an http status of 404
// with "todo not found"
app.get("/todos/:userId/:todoId", (req, res) => {
  const todo = todos.find(
    (e) => e.id == req.params.todoId && e.userId == req.params.userId
  );

  if (todo) {
    res.json(todo);
  } else {
    res.status(404);
    res.json("todo not found");
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000....");
});
