const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/bestbuy', { useNewUrlParser: true, useUnifiedTopology: true });

// remember to finish this connection and create the bestbuy db
const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('connected to Mongo');
});

const productSchema = new Schema({
  brand: String,
  name: String,
  model: String,
  options: [String],
  sku: [Number],
  productImages: [String],
  custImages: [{ image: String, review: String }],
  rating: Number,
  reviews: {
    5: Number, 4: Number, 3: Number, 2: Number, 1: Number,
  },
  expertReviews: Number,
  answeredQuestions: Number,
});

const Product = mongoose.model('Product', productSchema);

module.exports = {
  Product,
};
