/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import CustomerReviewStats from './customer-review-stats/CustomerReviewStats.jsx';
import ExpertReviews from './ExpertReviews.jsx';
import AnsweredQuestions from './AnsweredQuestions.jsx';
import styles from './ReviewBar.module.css';

class ReviewBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      answeredQuestions,
      expertReviews,
      reviews,
      rating,
    } = this.props;
    return (
      <div className={styles.reviewBar}>
        <div className={styles.customerReviewStats}>
          <CustomerReviewStats
            reviews={reviews}
            rating={rating}
          />
        </div>
        <div className={styles.expertReviews}>
          <ExpertReviews
            expertReviews={expertReviews}
          />
        </div>
        <div className={styles.answeredQuestions}>
          <AnsweredQuestions
            answeredQuestions={answeredQuestions}
          />
        </div>
      </div>
    );
  }
}

ReviewBar.propTypes = {
  answeredQuestions: PropTypes.number.isRequired,
  expertReviews: PropTypes.number.isRequired,
  reviews: PropTypes.shape({
    5: PropTypes.number.isRequired,
    4: PropTypes.number.isRequired,
    3: PropTypes.number.isRequired,
    2: PropTypes.number.isRequired,
    1: PropTypes.number.isRequired,
  }).isRequired,
  rating: PropTypes.number.isRequired,
};

export default ReviewBar;
