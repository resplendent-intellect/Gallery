/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import MainPhoto from './MainPhoto.jsx';
import ImageGallery from './ImageGallery.jsx';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: '',
    };
    this.handleImageHover = this.handleImageHover.bind(this);
  }

  handleImageHover(hoverImage) {
    const image = hoverImage;
    this.setState({
      currentPhoto: image,
    });
  }

  render() {
    const { productImages } = this.props;
    const { currentPhoto } = this.state;
    return (
      <div>
        <MainPhoto mainImage={currentPhoto} />
        <ImageGallery
          imageGallery={productImages}
          changeImage={this.handleImageHover}
        />
      </div>
    );
  }
}

PhotoGallery.propTypes = {
  productImages: PropTypes.instanceOf(Array).isRequired,
};

export default PhotoGallery;
