'use strict';

// Use node lib/readfile.js to test.
const fs = require('fs');

fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
  console.log('Read file');
  if(err) throw err;
  //console.log(data.toString());
  console.log(data.toString('ascii', 0, 8));
  console.log(data.toString('hex', 0, 8));
});
fs.readFile(`${__dirname}/../data/two.txt`, function(err, data) {
  console.log('Read file');
  if(err) throw err;
  //console.log(data.toString());
  console.log(data.toString('ascii', 0, 8));
  console.log(data.toString('hex', 0, 8));
});
fs.readFile(`${__dirname}/../data/three.txt`, function(err, data) {
  console.log('Read file');
  if(err) throw err;
  //console.log(data.toString());
  console.log(data.toString('ascii', 0, 8));
  console.log(data.toString('hex', 0, 8));
});

// fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
//   console.log('Read file');
//   if(err) throw err;
//   console.log(data.toString());
//   let newData = data.toString();
//   newData += '\n\nMore new text...';
//   // Replaces existing newData text in text.txt.
//
//   fs.writeFile(`${__dirname}/../data/text.txt`, newData, function(err) {
//     // Creates text file if it doesn't exist or uses existing file.
//     console.log('Wrote to file');
//     if(err) throw err;
//   });
// });
