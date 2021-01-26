import React from 'react';
import PropTypes from 'prop-types';
import styles from '../PhotoGallery.module.css';

const ModalMainPhoto = (props) => {
  const { modalImage, click } = props;
  return (
    <div className={styles.mainPhotoWrapper}>
      <button onClick={click} type="button" className={styles.mainPhotoButton}>
        <img className={styles.mainPhoto} src={modalImage} alt="Main goes here" />
      </button>
    </div>
  );
};

ModalMainPhoto.propTypes = {
  modalImage: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default ModalMainPhoto;
