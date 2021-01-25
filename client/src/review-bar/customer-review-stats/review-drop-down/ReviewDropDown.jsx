/* eslint-disable import/extensions */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styles from '../../ReviewBar.module.css';
import BarGraph from './BarGraph.jsx';

const ReviewDropDown = (props) => {
  const { open, close } = props;
  if (!open) {
    return null;
  }

  return (
    <div className={styles.reviewDropDown}>
      <img src="https://best-buy-hr.s3-us-west-1.amazonaws.com/review-drop-down.png" alt="review breakdown" />
      <div className={styles.readReviews}>
        Read Reviews
      </div>
    </div>
  );
};

ReviewDropDown.propTypes = {
  close: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ReviewDropDown;
