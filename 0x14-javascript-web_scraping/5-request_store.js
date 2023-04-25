#!/usr/bin/node
const fs = require('fs');
const requests = require('request');

const url = process.argv[2];
const file = process.argv[3];

requests(url)
  .pipe(fs.createWriteStream(file), { flags: 'w+' });
