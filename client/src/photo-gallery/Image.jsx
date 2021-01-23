import React from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoGallery.module.css';

const Image = (props) => {
  const {
    image,
    changeImage,
  } = props;
  return (
    <div>
      <button onMouseEnter={() => { changeImage(image); }} type="button" className={styles.singleImageButton}>
        <img className={styles.singleImage} src={image} alt="single" />
      </button>
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.string.isRequired,
  changeImage: PropTypes.func.isRequired,
};

export default Image;
