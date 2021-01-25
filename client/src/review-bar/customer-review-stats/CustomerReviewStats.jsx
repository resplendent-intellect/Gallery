/* eslint-disable import/extensions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import ReviewDropDown from './review-drop-down/ReviewDropDown.jsx';
import Reviews from './Reviews.jsx';
// import Stars from './Stars.jsx';
import styles from '../ReviewBar.module.css';

const CustomerReviewStats = (props) => {
  const {
    rating,
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className={styles.customerReviewStatsWrap}>
      <div className={styles.stars}>
        <img src="https://best-buy-hr.s3-us-west-1.amazonaws.com/stars.png" alt="star rating" />
      </div>
      <div className={styles.customerReviews}>
        <Reviews rating={rating} />
      </div>
      <div>
        <div onClick={handleOnClick} onKeyPress={handleOnClick} role="button" tabIndex={0} className={styles.caret}>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <ReviewDropDown open={isOpen} close={() => { setIsOpen(false); }} />
      </div>
    </div>
  );
};

CustomerReviewStats.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default CustomerReviewStats;
