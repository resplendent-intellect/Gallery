const pool = require('./indexPG.js');

const mainQueryText = 'SELECT * FROM product_info NATURAL JOIN answered_questions NATURAL JOIN reviews NATURAL JOIN sku_info WHERE product_id = $1';

const skuQueryText = 'SELECT * FROM sku_info WHERE product_id = $1';

const productQuery = (queryLine, analyze = false) => {
  const preState = analyze ? 'EXPLAIN ANALYZE' : '';
  const queryText = `${preState} ${queryLine}`;
  return queryText;
};

function productInfo(productNum, analyze = false) {
  return new Promise((resolve, reject) => {
    pool.query(productQuery(mainQueryText, analyze), [productNum])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
}

function skuInfo(skuNum, analyze = false) {
  return new Promise((resolve, reject) => {
    pool.query(productQuery(skuQueryText, analyze), [skuNum])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
}

// uncomment below for testing queries w/out API.
// productInfo(12, true)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err.stack));

module.exports = {
  productInfo,
  skuInfo,
};
