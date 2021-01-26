/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import airPodsMax from '../../database/dummyData.js';
import ProductTitle from './product-title/ProductTitle.jsx';
import ReviewBar from './review-bar/ReviewBar.jsx';
import PhotoGallery from './photo-gallery/PhotoGallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: airPodsMax,
    };
  }

  // airpods Max id 600c6e2499b914700ff047a5
  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    $.get(`http://localhost:3001/api${window.location.pathname}`, (product) => {
      this.setState({
        product,
      });
    });
  }

  render() {
    const { product } = this.state;
    const {
      brand,
      name,
      options,
      model,
      sku,
      productImages,
      reviews,
      expertReviews,
      answeredQuestions,
      rating,
    } = product;
    return (
      <div>
        <div>
          <ProductTitle
            brand={brand}
            name={name}
            options={options}
            model={model}
            sku={sku}
          />
        </div>
        <div>
          <ReviewBar
            reviews={reviews}
            expertReviews={expertReviews}
            answeredQuestions={answeredQuestions}
            rating={rating}
          />
        </div>
        <div>
          <PhotoGallery productImages={productImages} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
