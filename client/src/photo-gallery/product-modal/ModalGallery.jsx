/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../PhotoGallery.module.css';
import ModalImage from './ModalImage.jsx';

const ModalGallery = (props) => {
  const {
    productImages,
    setModalImage,
  } = props;
  const imageList = productImages.map((image) => (
    <div className={styles.singleImageContainer}>
      <ModalImage image={image} setModalImage={setModalImage} />
    </div>
  ));
  return (
    <ul className={styles.imageList}>{imageList}</ul>
  );
};

ModalGallery.propTypes = {
  productImages: PropTypes.instanceOf(Array).isRequired,
  setModalImage: PropTypes.func.isRequired,
};

export default ModalGallery;
