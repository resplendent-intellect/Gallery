import React from 'react';
import PropTypes from 'prop-types';
import styles from '../PhotoGallery.module.css';

const ModalImage = (props) => {
  const {
    image,
    setModalImage,
  } = props;
  return (
    <div className={styles.singleImageWrapper}>
      <div onClick={() => { setModalImage(image); }} onKeyPress={() => { setModalImage(image); }} role="button" className={styles.singleImageButton} tabIndex={0}>
        <img className={styles.singleImage} src={image} alt="single" />
      </div>
    </div>
  );
};

ModalImage.propTypes = {
  image: PropTypes.string.isRequired,
  setModalImage: PropTypes.func.isRequired,
};

export default ModalImage;
