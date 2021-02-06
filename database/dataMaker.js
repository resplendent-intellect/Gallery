const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

const writer = csvWriter();
let counter = 0;

const dataGen = () => {
  writer.pipe(fs.createWriteStream('data.csv'));
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
