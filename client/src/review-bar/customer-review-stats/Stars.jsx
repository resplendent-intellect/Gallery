import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ReviewBar.module.css';

// look into font awesome for the stars

const Stars = (props) => {
  let { rating } = props;
  const stars = [];
  while (stars.length < 5) {
    if (rating > 1) {
      stars.push(1);
    } else if (rating > 0) {
      const empty = Math.abs(0 - rating);
      const quart = Math.abs(0.25 - rating);
      const half = Math.abs(0.5 - rating);
      const three = Math.abs(0.75 - rating);
      const full = Math.abs(1 - rating);
      const closest = Math.min(empty, quart, half, three, full);
      switch (closest) {
        case (empty):
          stars.push(0);
          break;
        case quart:
          stars.push(0.28);
          break;
        case half:
          stars.push(0.5);
          break;
        case three:
          stars.push(0.72);
          break;
        case full:
          stars.push(1.0);
          break;
        default:
          console.log('OOPS');
          stars.push(0);
          break;
      }
    } else {
      stars.push(0);
    }
    rating -= 1;
  }
  return (
    <div>
      {stars.map((item) => (
        <div className={styles.singleStarContainer}>
          <div className={styles.singleStarFill} style={{ width: `${parseInt(item * 31, 10)}px` }}>
            <img className={styles.singleStarOutline} src="https://cdn4.iconfinder.com/data/icons/apply-pixels-glyphs/40/Star_Empty-512.png" alt="stars alt" />
          </div>
        </div>
      ))}
    </div>
  );
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Stars;
