/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import MainPhoto from './MainPhoto.jsx';
import ImageGallery from './ImageGallery.jsx';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { productImages } = this.props;
    return (
      <div>
        <MainPhoto mainImage={productImages[0]} />
        <ImageGallery productImages={productImages} />
      </div>
    );
  }
}

PhotoGallery.propTypes = {
  productImages: PropTypes.instanceOf(Array).isRequired,
};

export default PhotoGallery;
