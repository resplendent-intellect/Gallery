const pool = require('./indexPG.js');

const mainQueryText = 'SELECT * FROM product_info NATURAL JOIN answered_questions NATURAL JOIN reviews NATURAL JOIN sku_info WHERE product_id =';

// const mainQueryText = 'SELECT * FROM product_info NATURAL JOIN answered_questions NATURAL JOIN reviews WHERE product_id =';

const productQuery = (productNum, analyze = false) => {
  const preState = analyze ? 'EXPLAIN ANALYZE' : '';
  const queryText = `${preState} ${mainQueryText} ${productNum}`;
  return queryText;
};

function productInfo(productNum, analyze = false) {
  return new Promise((resolve, reject) => {
    console.time('query');
    pool.query(productQuery(productNum, analyze))
      .then((result) => {
        console.timeEnd('query');
        resolve(result);
      })
      .catch((err) => reject(err));
  });
}

productInfo(100000)
  .then((result) => console.log(result.rows))
  .catch((err) => console.log(err.stack));
