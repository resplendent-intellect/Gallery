const { Client } = require('pg');
const { PGconfig, tables, tableMakers } = require('./PGconfig.js');

const datafile = '/tmp/';

// setup user with password from PGconfig
// create db from PGconfig
// create tables w/ appropriate schema
// seed table with generated data file
const { user, password, database } = PGconfig;

function DBQuery(client, queryText) {
  return new Promise((resolve, reject) => {
    client.query(queryText)
      .then((result) => {
        console.log(result);
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function setupDB() {
  return new Promise((resolve, reject) => {
    const setupClient = new Client({ user, password });
    setupClient.connect()
      .then(() => console.log('connected'))
      .catch((err) => reject(err))
      .then(DBQuery(setupClient, `DROP DATABASE IF EXISTS ${database}`))
      .then(DBQuery(setupClient, `CREATE DATABASE ${database}`))
      .catch((err) => reject(err))
      .finally(DBQuery(setupClient, 'SELECT datname FROM pg_database')
        .then((result) => {
          // console.log(result);
          setupClient.end();
          resolve('successfully setup database');
        })
        .catch((err) => {
          setupClient.end();
          reject(err);
        }));
  });
}

function setupTables() {
  return new Promise((resolve, reject) => {
    const dbClient = new Client({ user, password, database });
    dbClient.connect()
      .then(() => console.log(`connected to ${database} database`))
      .catch((err) => reject(err))
      .then(DBQuery(dbClient, `DROP TABLE IF EXISTS ${tables.join(', ')} CASCADE`))
      .then(Promise.all(tableMakers.map((value) => DBQuery(dbClient, value))))
      .catch((err) => reject(err))
      .finally(DBQuery(dbClient, 'SELECT table_name FROM information_schema.tables WHERE table_schema = \'public\' ORDER BY table_name')
        .then((result) => {
          // console.log(result);
          dbClient.end();
          resolve('table setup complete');
        })
        .catch((err) => {
          dbClient.end();
          reject(err);
        }));
  });
}

function populateTables() {
  return new Promise((resolve, reject) => {
    const dbClient = new Client({ user, password, database });
    dbClient.connect()
      .then(() => console.log('ready to copy data'))
      .catch((err) => reject(err))
      .then(Promise.all(tables.map((value) => DBQuery(dbClient, `COPY ${value} FROM '${datafile}${value}.csv' WITH DELIMITER ',' NULL 'null' CSV HEADER;`))))
      .then((DBQuery(dbClient, 'CREATE INDEX product_id_index ON sku_info(product_id)'))
        .then((result) => {
          console.log(result);
          dbClient.end();
          resolve('data added to tables');
        })
        .catch((err) => {
          dbClient.end();
          reject(err);
        }));
  });
}

async function populate() {
  await populateTables()
    .then((message) => console.log(message))
    .catch((err) => console.log(err.stack));
}

async function prepSetup() {
  await setupDB()
    .then((message) => console.log(message))
    .catch((err) => console.log(err.stack));
  await setupTables()
    .then((message2) => console.log(message2))
    .catch((err) => console.log(err.stack));
  await populate();
}

prepSetup();
