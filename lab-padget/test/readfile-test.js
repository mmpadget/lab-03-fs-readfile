'use strict';

// npm run test
console.log('evaluating readfile.js');
// it should read three files and log the first 8 bytes in hex.

const expect = require('chai').expect;
const Buffer = require('buffer').Buffer;
const fs = require('fs');
// require readFile in test.

let mock = [ '5475726e69702067', '476f646172642061', '596f752068617665' ];
console.log(mock);
// compare this array to out array.

// Follow similar format:
// exports.readThreeFiles(function(err, myArray){
//   if (err) throw err;
//   console.log('are we here?', myArray);
// });

// const assert = require('assert');
// const readFile = require('../lib/readfile.js');

describe('fs module', function() {
  describe('#readFile', function() {
    // expect('test').to.be.a('string');

    // it('should return a string with planting depth', function() {
    //   assert.equal(typeof newPlant.depth, 'string');
    // });

    it('should return a string with text data from file one', done => {
      // exports.readThreeFiles(function(err, myArray){
      //   if (err) throw err;
      //   console.log('are we here?', myArray);
      // expect.....
      // });
      fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
        // assert.equal(typeof newPlant.depth, 'string');

        // let bufferData = data;
        // expect(typeof bufferData).equal(typeof Buffer.from(''));
        // console.log(data.toString('hex', 0, 8));
        expect(data.toString()).to.be.a('string');

        done();
      });
    });

    it('should return a string with text data from file two', done => {
      fs.readFile(`${__dirname}/../data/two.txt`, function(err, data) {
        let bufferData = data;
        expect(typeof bufferData).equal(typeof Buffer.from(''));
        done();
      });
    });

    it('should return a string with text data from file three', done => {
      fs.readFile(`${__dirname}/../data/three.txt`, function(err, data) {
        let bufferData = data;
        expect(typeof bufferData).equal(typeof Buffer.from(''));
        done();
      });
    });

    // it('should write a new file to the data dir', done => {
    //     done();
    //   });
    // });
  });
});
