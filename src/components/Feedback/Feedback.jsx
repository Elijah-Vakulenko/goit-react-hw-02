import React from 'react';

import s from './Feedback.module.css'

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => {
  const { good, neutral, bad } = feedback;

  return (
      <div>
          <ul className={s.list}>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive: {positiveFeedbackPercentage}%</li>
          </ul>
      </div>
  );
}

export default Feedback;
