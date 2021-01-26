import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReviewBar.module.css';

const ExpertReviews = (props) => {
  const { expertReviews } = props;
  return (
    <div>
      {`${expertReviews} Expert Reviews`}
    </div>
  );
};

ExpertReviews.propTypes = {
  expertReviews: PropTypes.number.isRequired,
};

export default ExpertReviews;
