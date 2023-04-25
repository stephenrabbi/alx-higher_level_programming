#!/usr/bin/node
const fs = require('fs');
// reads and prints the content of a file

const arg = process.argv[2];
fs.readFile(arg, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
