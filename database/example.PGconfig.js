// fill in appropriate data, rename as PGconfig.js

exports.PGconfig = {
  user: 'postgres',
  // host: 'localhost',
  database: 'BBGallery',
  password: 'FILL IN',
};

exports.tables = [
  'product_info',
  'answered_questions',
  'reviews',
  'sku_info',
];

exports.tableMakers = [
  `CREATE TABLE ${exports.tables[0]} (
    product_id INT PRIMARY KEY,
    brand VARCHAR (50)
  );`,
  `CREATE TABLE ${exports.tables[1]} (
    productId
    answerCount
  );`,
  `CREATE TABLE ${exports.tables[2]} (
    productId
    reviewCount
    ratingNumber
    expertReviewCount
    5starCount
    4starCount
    3starCount
    2starCount
    1starCount
  );`,
  `CREATE TABLE ${exports.tables[3]} (
    productId
    SKUId
    productName
    modelNum
    productImageList
  );`,
];
