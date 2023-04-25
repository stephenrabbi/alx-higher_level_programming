#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }
  const todos = JSON.parse(body);
  const done = {};

  for (const todo of todos) {
    if (todo.completed) {
      if (!done[todo.userId]) {
        done[todo.userId] = 1;
      } else {
        done[todo.userId] += 1;
      }
    }
  }
  console.log(done);
});
