/* eslint-disable import/extensions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainPhoto from './MainPhoto.jsx';
import ImageGallery from './ImageGallery.jsx';
import styles from './PhotoGallery.module.css';
import ProductModal from './product-modal/ProductModal.jsx';

const PhotoGallery = (props) => {
  const [currentPhoto, setCurrentPhoto] = useState('https://best-buy-hr.s3-us-west-1.amazonaws.com/aws-images/airpodsMax1.jpg');
  const [isOpen, setIsOpen] = useState(false);

  const handleImageHover = (hoverImage) => {
    const image = hoverImage;
    setCurrentPhoto(image);
  };

  const { productImages } = props;
  return (
    <div className={styles.photoGallery}>
      <MainPhoto mainImage={currentPhoto} click={() => { setIsOpen(true); }} />
      <ImageGallery
        imageGallery={productImages}
        changeImage={handleImageHover}
        click={() => { setIsOpen(true); }}
      />
      <ProductModal
        open={isOpen}
        close={() => { setIsOpen(false); }}
        productImages={productImages}
      />
    </div>
  );
};

PhotoGallery.propTypes = {
  productImages: PropTypes.instanceOf(Array).isRequired,
};

export default PhotoGallery;
