import React from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoGallery.module.css';

const MainPhoto = (props) => {
  const { mainImage } = props;
  return (
    <div>
      <img className={styles.mainPhoto} src={mainImage} alt="Main goes here" />
    </div>
  );
};

MainPhoto.propTypes = {
  mainImage: PropTypes.string.isRequired,
};

export default MainPhoto;
