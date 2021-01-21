import React from 'react';
import CustomerReviewStats from './customer-review-stats/CustomerReviewStats.jsx';

class ReviewBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <CustomerReviewStats />
        {/* Expert reviews here */}
        {/* Answered Questions here */}
      </div>
    );
  }
}

export default ReviewBar;
