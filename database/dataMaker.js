// currently writing to /tmp folder, works for mac, may have to change for ubuntu.

const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

const writer1 = csvWriter();
const writer2 = csvWriter();
const filepath = '/tmp/';
let counter = 0;

const dataGen = () => {
  writer1.pipe(fs.createWriteStream(filepath + 'product_info.csv'));
  writer2.pipe(fs.createWriteStream(filepath + 'answered_questions.csv'));
  for (let i = 0; i < 100; i += 1) {
    writer1.write({
      product_id: counter,
      brand: faker.lorem.word(),
    });
    writer2.write({
      product_id: counter,
      answerCount: Math.floor(Math.random() * 100),
    });
    counter += 1;
  }
  writer1.end();
  writer2.end();
  console.log('done');
};

dataGen();
