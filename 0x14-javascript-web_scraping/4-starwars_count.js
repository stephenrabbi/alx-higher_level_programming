#!/usr/bin/node
const request = require('request');

const endpoint = process.argv[2];
let count = 0;

request.get(endpoint, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }
  const data = JSON.parse(body).results;
  for (const result of data) {
    const people = result.characters;
    for (const url of people) {
      if (url.endsWith('/18/')) {
        count++;
      }
    }
  }
  console.log(count);
});
