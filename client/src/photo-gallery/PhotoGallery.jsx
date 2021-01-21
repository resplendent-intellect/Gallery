import React from 'react';
import MainPhoto from './MainPhoto.jsx';
import ImageGallery from './ImageGallery.jsx';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MainPhoto />
        <ImageGallery />
      </div>
    );
  }
}
export default PhotoGallery;
