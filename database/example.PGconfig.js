// fill in appropriate data, rename as PGconfig.js
// if table schema changes here, change the data generation file also
// NOTE: setup is designed for root user 'postgres' to have same password as one assigned here.

exports.PGconfig = {
  user: 'FILL_ME_IN',
  database: 'bbgallery',
  password: 'FILL_ME_IN',
};

exports.tables = [
  'product_info',
  'answered_questions',
  'reviews',
  'sku_info',
];

exports.tableMakers = [
  `CREATE TABLE ${exports.tables[0]} (
    product_id INT PRIMARY KEY,
    brand VARCHAR (50)
  );`,
  `CREATE TABLE ${exports.tables[1]} (
    product_id INT PRIMARY KEY,
    answer_count SMALLINT,
    CONSTRAINT fk_product_info
     FOREIGN KEY(product_id)
      REFERENCES product_info(product_id)
  );`,
  `CREATE TABLE ${exports.tables[2]} (
    product_id INT PRIMARY KEY,
    expert_review_count SMALLINT,
    review_count SMALLINT,
    rating_number DECIMAL(2, 1),
    five_count SMALLINT,
    four_count SMALLINT,
    three_count SMALLINT,
    two_count SMALLINT,
    one_count SMALLINT,
    CONSTRAINT fk_product_info
     FOREIGN KEY(product_id)
      REFERENCES product_info(product_id)
  );`,
  `CREATE TABLE ${exports.tables[3]} (
    product_id INT,
    sku_id INT,
    option_name VARCHAR (30),
    product_name VARCHAR (100),
    model_num VARCHAR (15),
    product_images VARCHAR (1000),
    PRIMARY KEY (sku_id),
    CONSTRAINT fk_product_info
     FOREIGN KEY(product_id)
      REFERENCES product_info(product_id)
  );`,
];
