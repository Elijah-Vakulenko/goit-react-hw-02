import React from 'react';

import s from './Feedback.module.css'

const Feedback = ({ feedback }) => {
  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage = totalFeedback ? (good / totalFeedback) * 100 : 0;

  return (
      <div>
          <ul className={s.list}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive: {positiveFeedbackPercentage.toFixed(2)}%</li>
          </ul>
      </div>
  );
}

export default Feedback;
