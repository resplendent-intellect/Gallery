/* eslint-disable import/extensions */
import React from 'react';
import Star from './Star.jsx';

const Bar = function (props) {
// map over the different bar ratings to get paritially filled bars
// this will be a single bar
  return (
    <div>
      <Star />
    </div>
  );
};

export default Bar;
