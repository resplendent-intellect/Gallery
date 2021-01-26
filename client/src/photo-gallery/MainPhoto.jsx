import React from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoGallery.module.css';

const MainPhoto = (props) => {
  const { mainImage, click } = props;
  return (
    <div className={styles.mainPhotoWrapper}>
      <button onClick={click} type="button" className={styles.mainPhotoButton}>
        <img className={styles.mainPhoto} src={mainImage} alt="Main goes here" />
      </button>
    </div>
  );
};

MainPhoto.propTypes = {
  mainImage: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default MainPhoto;
