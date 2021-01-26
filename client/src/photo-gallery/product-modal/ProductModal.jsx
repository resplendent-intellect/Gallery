import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../PhotoGallery.module.css';

const ProductModal = (props) => {
  const { open, close } = props;
  if (!open) {
    return null;
  }
  return (
    <div className={styles.productModal}>
      <div className={styles.productModalTitle}>
        <h2 className={styles.productImages}>Product Images</h2>
        <h2>Customer Images</h2>
        <div className={styles.modalX} onClick={close} tabIndex={0} role="button" onKeyPress={close}>X</div>
      </div>
    </div>
  );
};

ProductModal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default ProductModal;
