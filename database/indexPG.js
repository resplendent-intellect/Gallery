const { Pool } = require('pg');
const { PGconfig } = require('./PGconfig.js');

const pool = new Pool(PGconfig);

module.exports = {
  query: (text, params) => {
    const startTime = Date.now();
    return pool.query(text, params)
      .then((result) => {
        const duration = Date.now() - startTime;
        console.log('Querytime:', duration, 'ms; rows:', result.rowCount);
        return result;
      })
      .catch((err) => err);
  },
};
