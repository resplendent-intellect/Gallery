/* eslint-disable no-console */
const faker = require('faker');
const { Product } = require('./index.js');

// const airpodsMax = new Product();
// airpodsMax.brand = 'Apple';
// airpodsMax.name = 'AirPods Max';
// airpodsMax.model = 'MGYN3AM/A';
// airpodsMax.options = ['Space Grey', 'Sky blue', 'Green', 'Pink', 'Silver'];
// airpodsMax.sku = [6373460, 6376542, 6376549, 6376546, 6373463];
// airpodsMax.productImages = [''];
// airpodsMax.custImages = [{ image: '', review: '' }];
// airpodsMax.rating = 4.4;
// airpodsMax.reviews[5] = 51;
// airpodsMax.reviews[4] = 13;
// airpodsMax.reviews[3] = 9;
// airpodsMax.reviews[2] = 3;
// airpodsMax.reviews[1] = 2;
// airpodsMax.expertReviews = 7;
// airpodsMax.answeredQuestions = 30;

// helper function for data generation
const stringLengthGenerator = (func, length) => {
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result += func();
  }
  return result;
};
const generateList = (func) => {
  const result = [];
  const length = Math.floor(Math.random() * 10);
  for (let i = 0; i < length; i += 1) {
    result.push(func());
  }
  return result;
};

const seed = () => {
  for (let i = 0; i <= 100; i += 1) {
    const randomProduct = new Product({
      brand: faker.company.companyName(),
      name: faker.commerce.productName(),
      model: stringLengthGenerator(faker.random.alphaNumeric, 10),
      options: generateList(faker.random.word),
      sku: generateList(faker.random.number),
      productImages: generateList(faker.image.imageUrl),
      custImages: { image: faker.image.imageUrl(), review: faker.image.imageUrl() },
      reviews: {
        5: Math.floor(Math.random() * 100),
        4: Math.floor(Math.random() * 100),
        3: Math.floor(Math.random() * 100),
        2: Math.floor(Math.random() * 100),
        1: Math.floor(Math.random() * 100),
      },
      rating: (Math.random() * 5),
      expertReviews: Math.floor(Math.random() * 10),
      answeredQuestions: Math.floor(Math.random() * 100),
    });

    // randomProduct.brand = faker.company.companyName();
    // randomProduct.name = faker.commerce.productName();
    // randomProduct.model = stringLengthGenerator(faker.random.alphaNumeric, 10);
    // randomProduct.options = generateList(faker.random.word);
    // randomProduct.sku = generateList(faker.random.number);
    // randomProduct.productImages = generateList(faker.image.imageUrl);
    // randomProduct.custImages = { image: faker.image.imageUrl(), review: faker.image.imageUrl() };
    // randomProduct.reviews[5] = Math.floor(Math.random() * 100);
    // randomProduct.reviews[4] = Math.floor(Math.random() * 100);
    // randomProduct.reviews[3] = Math.floor(Math.random() * 100);
    // randomProduct.reviews[2] = Math.floor(Math.random() * 100);
    // randomProduct.reviews[1] = Math.floor(Math.random() * 100);
    // randomProduct.rating = Math.random() * 5;
    // randomProduct.expertReviews = Math.floor(Math.random() * 10);
    // randomProduct.answeredQuestions = Math.floor(Math.random() * 100);

    randomProduct.save()
      // .then((results) => {
      //   // eslint-disable-next-line no-console
      //   console.log('written to the db: ', results, 'index: ', i);
      // })
      .catch((err) => {
        console.log(err);
      });
  }
};
seed();

module.exports = {
  seed,
};
