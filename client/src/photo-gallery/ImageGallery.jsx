/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoGallery.module.css';

import Image from './Image.jsx';

const ImageGallery = (props) => {
  // Map over list of product images
  const {
    imageGallery,
    changeImage,
  } = props;
  const imageList = imageGallery.map((image) => (
    <div className={styles.imageList}>
      <Image image={image} changeImage={changeImage} />
    </div>
  ));
  return (
    <ul>{imageList}</ul>
  );
};

ImageGallery.propTypes = {
  imageGallery: PropTypes.instanceOf(Array).isRequired,
  changeImage: PropTypes.func.isRequired,
};

export default ImageGallery;
