import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductTitle.module.css';

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
        <div className={styles.brand}>{brand}</div>
        <div>{`${brand} - ${name} - ${options[0]}`}</div>
        <div>{`Model: ${model} SKU: ${sku[0]}`}</div>
      </div>
    );
  }
}
ProductTitle.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
  model: PropTypes.string.isRequired,
  sku: PropTypes.instanceOf(Array).isRequired,
};

export default ProductTitle;
