const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { productInfo } = require('../database/queryPG.js');
const { dataHandler } = require('./dataHandler.js');
require('newrelic');

const app = express();

// serve up static files
// app.use(express.static(`${__dirname}/../client/dist`));

// middleware
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use('/products/:id', express.static(`${__dirname}/../client/dist`));

app.get('/', (req, res) => {
  res.redirect('/products/1');
});

const port = 3001;

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  productInfo(id)
    .then((result) => {
      const data = dataHandler(result);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${port} !`);
});
