const { Product } = require('./index.js');

const getProduct = (id, callback) => {
  Product.findById(id, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  getProduct,
};
