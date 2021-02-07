const { Pool } = require('pg');
const { PGconfig } = require('./PGconfig.js');

const pool = new Pool(PGconfig);

module.exports = {
  query: (text, params) => pool.query(text, params),
};
