/* eslint-disable import/extensions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../PhotoGallery.module.css';
import ModalMainPhoto from './ModalMainPhoto.jsx';
import ModalGallery from './ModalGallery.jsx';

const ProductModal = (props) => {
  const { open, close, productImages } = props;
  const [modalImage, setModalImage] = useState('https://best-buy-hr.s3-us-west-1.amazonaws.com/aws-images/airpodsMax1.jpg');

  if (!open) {
    return null;
  }
  return (
    <div className={styles.productModal}>
      <div className={styles.productModalTitle}>
        <div className={styles.productImages}>
          <div className={styles.productImagesTitle}>Product Images</div>
          <div className={styles.customerImagesTitle}>Customer Images</div>
        </div>
        <div>
          <div className={styles.modalX} onClick={close} tabIndex={0} role="button" onKeyPress={close}>X</div>
        </div>
      </div>
      <div className={styles.modalImageGallery}>
        <ModalGallery setModalImage={setModalImage} productImages={productImages} />
      </div>
      <div>
        <ModalMainPhoto className={styles.modalMainPhoto} modalImage={modalImage} />
      </div>
    </div>
  );
};

ProductModal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  productImages: PropTypes.instanceOf(Array).isRequired,
};

export default ProductModal;
