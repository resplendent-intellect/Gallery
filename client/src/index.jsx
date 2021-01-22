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

  componentDidMount() {
    // hard coded to get airPods Max
    this.getProduct('6007276dd52d0d43b75fbd6a');
  }

  getProduct(id) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/products/${id}`,
      success: (product) => {
        // do stuff if the req goes through ok
        console.log(product);
        this.setState({ product });
      },
      error: (err) => {
        console.log('client didnt get the data', err);
      },
    });
  }

  render() {
    console.log(this.state.product);
    const { product } = this.state;
    const {
      brand,
      name,
      options,
      model,
      sku,
    } = product;
    return (
      <div>
        <ProductTitle
          brand={brand}
          name={name}
          options={options}
          model={model}
          sku={sku}
        />
        <hr />
        <ReviewBar />
        <hr />
        <PhotoGallery />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
