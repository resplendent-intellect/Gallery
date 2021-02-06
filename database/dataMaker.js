// currently writing to /tmp folder, works for mac, may have to change for ubuntu.

const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

const writer = csvWriter();
const filepath = '/tmp/data.csv';
let counter = 0;

const dataGen = () => {
  writer.pipe(fs.createWriteStream(filepath));
  for (let i = 0; i < 100; i += 1) {
    writer.write({
      product_id: counter,
      brand: faker.lorem.word(),
    });
    counter += 1;
  }
  writer.end();
  console.log('done');
};

dataGen();
