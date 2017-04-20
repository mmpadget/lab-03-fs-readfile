'use strict';

// 3. The readfile.js runs.
const readMainFile = require('./lib/readfile.js');
// Runs the code in readfile.js
console.log(readMainFile, 'here');
// 1. readMainFile outputs an object.

// 2. write and read to buffer.
const Buffer = require('buffer').Buffer;
let myBuffer = Buffer.from('Hello world');
console.log(myBuffer.toString('utf-8', 0, 5));
// (encoding, start, end)
