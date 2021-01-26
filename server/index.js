const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getProduct } = require('../database/query.js');

const app = express();

// serve up static files
// app.use(express.static(`${__dirname}/../client/dist`));

// middleware
app.use(cors());
// app.use(bodyParser.json());
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
  getProduct(id, (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      // handle the err so the client sees it
      res.send(404);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port} !`);
});
