import React from 'react';
import ReviewDropDown from './review-drop-down/ReviewDropDown.jsx';
import Reviews from './Reviews.jsx';
import Stars from './Stars.jsx';

class CustomerReviewStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Stars />
        <Reviews />
        <ReviewDropDown />
      </div>
    );
  }
}

export default CustomerReviewStats;
