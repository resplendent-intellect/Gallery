import React from 'react';
import PropTypes from 'prop-types';

class ProductTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {
      brand,
      name,
      options,
      model,
      sku,
    } = this.props;
    return (
      <div>
        <div>{brand}</div>
        <div>{`${brand} - ${name} - ${options[0]}`}</div>
        <div>{`Model: ${model} SKU: ${sku[0]}`}</div>
      </div>
    );
  }
}
ProductTitle.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.instanceOf(Array).isRequired, // change to arr
  model: PropTypes.string.isRequired,
  sku: PropTypes.instanceOf(Array).isRequired,
};
// ProductTitle.

export default ProductTitle;
