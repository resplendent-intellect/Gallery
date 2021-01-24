import React from 'react';
import PropTypes from 'prop-types';

const AnsweredQuestions = (props) => {
  const { answeredQuestions } = props;
  return (
    <div>
      {`${answeredQuestions} Answered Questions`}
    </div>
  );
};

AnsweredQuestions.propTypes = {
  answeredQuestions: PropTypes.number.isRequired,
};

export default AnsweredQuestions;
