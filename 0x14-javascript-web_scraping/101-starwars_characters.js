#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];
const endpoint = 'https://swapi-api.hbtn.io/api/films/' + movieId;

request.get(endpoint, async function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }
  const data = JSON.parse(body);
  for (const url of data.characters) {
    await new Promise(function (resolve, reject) {
      request(url, function (error, response, body) {
        if (error) {
          reject(error);
          return;
        }
        console.log(JSON.parse(body).name);
        resolve();
      });
    });
  }
});
