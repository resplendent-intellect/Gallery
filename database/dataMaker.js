/* eslint-disable camelcase */
// currently writing to /tmp folder, works for mac, may have to change for ubuntu.
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const { tables } = require('./PGconfig.js');

const dataSize = 1000;
const writers = [];
const filepath = '/tmp/';
let counter = 0;
let skuCounter = 0;

const randoInterval = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const imageSetMaker = () => {
  const length = randoInterval(6, 10);
  const output = [];
  for (let index = 0; index < length; index += 1) {
    output.push('https://loremflickr.com/320/360');
  }
  return output;
};

const ratingBuilder = () => {
  const five_count = randoInterval(0, 100);
  const four_count = randoInterval(0, 100);
  const three_count = randoInterval(0, 100);
  const two_count = randoInterval(0, 100);
  const one_count = randoInterval(0, 100);
  const review_count = (five_count + four_count + three_count + two_count + one_count);
  const rating_number = (
    parseFloat(
      (((five_count * 5) + (four_count * 4) + (three_count * 3) + (two_count * 2) + (one_count))
      / review_count)
        .toFixed(1),
    ));
  return {
    review_count, rating_number, five_count, four_count, three_count, two_count, one_count,
  };
};

const dataGen = () => {
  for (let i = 0; i < tables.length; i += 1) {
    writers[i] = csvWriter();
    writers[i].pipe(fs.createWriteStream(`${filepath}${tables[i]}.csv`));
  }
  for (let i = 0; i < dataSize; i += 1) {
    writers[0].write({
      product_id: counter,
      brand: faker.lorem.word(),
    });
    writers[1].write({
      product_id: counter,
      answerCount: Math.floor(Math.random() * 100),
    });
    const ratingSet = ratingBuilder();
    writers[2].write({
      product_id: counter,
      expert_review_count: randoInterval(1, 30),
      ...ratingSet,
    });
    const skuLength = randoInterval(1, 5);
    for (let skuIndex = 0; skuIndex < skuLength; skuIndex += 1) {
      writers[3].write({
        product_id: counter,
        sku_id: skuCounter,
        product_name: faker.lorem.words(randoInterval(1, 5)),
        model_num: faker.random.alphaNumeric(9),
        product_images: JSON.stringify(imageSetMaker()),
      });
      skuCounter += 1;
    }
    counter += 1;
  }
  for (let i = 0; i < tables.length; i += 1) {
    writers[i].end();
  }
  console.log('done');
};

dataGen();
