import React from 'react';
import PropTypes from 'prop-types';

const MainPhoto = (props) => {
  const { mainImage } = props;
  return (
    <div>

      <img src={mainImage} alt="Main goes here" />
    </div>
  );
};

MainPhoto.propTypes = {
  mainImage: PropTypes.string.isRequired,
};

export default MainPhoto;
