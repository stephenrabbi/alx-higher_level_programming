#!/usr/bin/node
const fs = require('fs');
// writes a string to a file

const file = process.argv[2];
const content = process.argv[3];

fs.writeFile(file, content, err => {
  if (err) {
    console.error(err);
  }
});
