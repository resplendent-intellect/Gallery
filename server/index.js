const express = require('express');

const app = express();
app.use(express.static('../public'));

const port = 3000;

app.get('/products', (req, res) => {
  res.send('hello from the server');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port} !`);
});
