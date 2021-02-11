/* eslint-disable camelcase */
// currently writing to /tmp folder, works for mac, may have to change for ubuntu.
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const { tables } = require('./PGconfig.js');

const dataSize = 11000000;
const filepath = '/tmp/';

const randoInterval = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const imageSetMaker = () => {
  const length = randoInterval(6, 10);
  const output = [];
  const imageCats = ['cat', 'dog', 'food', 'art', 'tech'];
  for (let index = 0; index < length; index += 1) {
    output.push(`https://loremflickr.com/320/360/${faker.random.arrayElement(imageCats)}`);
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

function writeIt(writers, data, last = false) {
  // let success = true;
  for (let i = 0; i < writers.length; i += 1) {
    for (let row = 0; row < data[i].length; row += 1) {
      if (writers[i].write(data[i][row]) === false) {
        return i;
      }
      if (last) { writers[i].once('drain', () => writers[i].end()); }
    }
  }
  return undefined;
}

function writeReviews() {
  const writers = [];
  for (let iTable = 0; iTable < tables.length; iTable += 1) {
    writers[iTable] = csvWriter();
    writers[iTable].pipe(fs.createWriteStream(`${filepath}${tables[iTable]}.csv`));
  }
  let iDown = dataSize;
  let counter = 0;
  let skuCounter = 0;
  function getToIt() {
    // as long as bog is undefined, our backpressure is clear.
    // Once we hit the 'high water mark' our bog is set to the writer that is backed up.
    // This lets us wait for a specific writer to drain.
    let bog;
    do {
      iDown -= 1;
      counter += 1;
      const generatedData = [];
      generatedData[0] = [{
        product_id: counter,
        brand: faker.lorem.word(),
      }];
      generatedData[1] = [{
        product_id: counter,
        answerCount: randoInterval(1, 100),
      }];
      const ratingSet = ratingBuilder();
      generatedData[2] = [{
        product_id: counter,
        expert_review_count: randoInterval(1, 30),
        ...ratingSet,
      }];
      const skuLength = randoInterval(1, 5);
      generatedData[3] = [];
      for (let skuIndex = 0; skuIndex < skuLength; skuIndex += 1) {
        generatedData[3].push({
          product_id: counter,
          sku_id: skuCounter,
          option_name: faker.lorem.words(randoInterval(1, 2)),
          product_name: faker.lorem.words(randoInterval(1, 5)),
          model_num: faker.random.alphaNumeric(9),
          product_images: JSON.stringify(imageSetMaker()),
        });
        skuCounter += 1;
      }
      // we've generated data, the next thing to DO is write it.
      if (iDown === 0) {
        writeIt(writers, generatedData, true);
        console.log(`Done: ${counter} products written`);
        return true;
      }
      if (counter % 10000 === 0) { console.log(counter); }
      bog = writeIt(writers, generatedData);
    } while (iDown > 0 && bog === undefined);
    if (iDown > 0) {
      writers[bog].once('drain', getToIt);
    }
    return false;
  }
  return getToIt();
}

writeReviews();
