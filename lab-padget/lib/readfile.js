'use strict';

// Use node lib/readfile.js to test.
const fs = require('fs');

// push into array. console log that array.
let myArray = [readFileOne.data1, readFileTwo.data2, readFileThree.data3];
// test the order is correct
myArray.push();

// File one: small
fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
  // console.log('1. Read file one: small');
  // if(err) throw err;
  // //console.log(data.toString());
  // console.log(data.toString('ascii', 0, 8));
  // console.log(data.toString('hex', 0, 8));
  readFileOne(err, data);

  // File two: medium
  fs.readFile(`${__dirname}/../data/two.txt`, function(err, data) {
    // console.log('2. Read file two: medium');
    // if(err) throw err;
    // //console.log(data.toString());
    // console.log(data.toString('ascii', 0, 8));
    // console.log(data.toString('hex', 0, 8));
    readFileTwo(err, data);

    // File three: large
    fs.readFile(`${__dirname}/../data/three.txt`, function(err, data) {
      // console.log('3. Read file three: large');
      // if(err) throw err;
      // //console.log(data.toString());
      // console.log(data.toString('ascii', 0, 8));
      // console.log(data.toString('hex', 0, 8));
      readFileThree(err, data);
    });
  });
});

// File one: small
function readFileOne(err, data) {
  console.log('1. Read file one: small');
  if(err) throw err;
  //console.log(data.toString());
  console.log(data.toString('ascii', 0, 8));
  console.log(data.toString('hex', 0, 8));

  let data1 = data.toString('hex', 0, 8);
  console.log(data1);
}

// File two: medium
function readFileTwo(err, data) {
  console.log('2. Read file two: medium');
  if(err) throw err;
  //console.log(data.toString());
  console.log(data.toString('ascii', 0, 8));
  console.log(data.toString('hex', 0, 8));

  let data2 = data.toString('hex', 0, 8);
  console.log(data2);
}

// File three: large
function readFileThree(err, data) {
  console.log('3. Read file three: large');
  if(err) throw err;
  //console.log(data.toString());
  console.log(data.toString('ascii', 0, 8));
  console.log(data.toString('hex', 0, 8));

  let data3 = data.toString('hex', 0, 8);
  console.log(data3);
}

// // File two: medium
// fs.readFile(`${__dirname}/../data/two.txt`, function(err, data) {
//   console.log('2. Read file two: medium');
//   if(err) throw err;
//   //console.log(data.toString());
//   console.log(data.toString('ascii', 0, 8));
//   console.log(data.toString('hex', 0, 8));
// });

// File three: large
// fs.readFile(`${__dirname}/../data/three.txt`, function(err, data) {
//   console.log('3. Read file three: large');
//   if(err) throw err;
//   //console.log(data.toString());
//   console.log(data.toString('ascii', 0, 8));
//   console.log(data.toString('hex', 0, 8));
// });

// Example
// fs.rename('/tmp/hello', '/tmp/world', (err) => {
//   if (err) throw err;
//   fs.stat('/tmp/world', (err, stats) => {
//     if (err) throw err;
//     console.log(`stats: ${JSON.stringify(stats)}`);
//   });
// });

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
