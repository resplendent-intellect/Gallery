import React from 'react';
import PropTypes from 'prop-types';

const MainPhoto = (props) => {
  const { image } = props;
  return (
    <div>

      <img src={image} alt="Main goes here" />
    </div>
  );
};

MainPhoto.propTypes = {
  image: PropTypes.string.isRequired,
};

export default MainPhoto;
