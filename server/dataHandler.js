const dataHandler = (dbResult) => {
  const sku = [];
  // const options = [];
  const options = ['Space Grey', 'Sky blue', 'Green', 'Pink', 'Silver'];
  for (let i = 0; i < dbResult.rows.length; i += 1) {
    sku.push(dbResult.rows[i].sku_id);
    // options.push(dbResult.rows[i].option_name);
  }
  const firstRow = { ...dbResult.rows[0] };
  const data = {
    brand: firstRow.brand,
    name: firstRow.product_name,
    options,
    model: firstRow.model_num,
    sku,
    productImages: JSON.parse(firstRow.product_images),
    reviews: {
      5: firstRow.five_count,
      4: firstRow.four_count,
      3: firstRow.three_count,
      2: firstRow.two_count,
      1: firstRow.one_count,
    },
    expertReviews: firstRow.expert_review_count,
    answeredQuestions: firstRow.answer_count,
    rating: parseFloat(firstRow.rating_number),
  };

  console.log(data);

  return data;
};

module.exports = {
  dataHandler,
};
