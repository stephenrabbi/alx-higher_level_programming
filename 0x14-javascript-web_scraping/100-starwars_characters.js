#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];
const endpoint = 'https://swapi-api.hbtn.io/api/films/' + movieId;

request.get(endpoint, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }
  const data = JSON.parse(body).characters;
  for (const url of data) {
    request.get(url, (err, res, body) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(JSON.parse(body).name);
    });
  }
});
