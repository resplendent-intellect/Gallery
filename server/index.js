const express = require('express');
const bodyParser = require('body-parser');
const { getProduct } = require('../database/query.js');

const app = express();
// serve up static files
app.use(express.static('../public'));

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

const port = 3000;

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  getProduct(id, (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port} !`);
});
