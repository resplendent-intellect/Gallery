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
    click,
  } = props;
  const imageList = imageGallery.map((image) => (
    <div className={styles.singleImageContainer} onClick={click} onKeyPress={click} role="button" tabIndex={0}>
      <Image image={image} changeImage={changeImage} />
    </div>
  ));
  return (
    <ul className={styles.imageList}>{imageList}</ul>
  );
};

ImageGallery.propTypes = {
  imageGallery: PropTypes.instanceOf(Array).isRequired,
  changeImage: PropTypes.func.isRequired,
  click: PropTypes.func.isRequired,
};

export default ImageGallery;
