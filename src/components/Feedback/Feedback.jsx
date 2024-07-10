import React from 'react';

import s from './Feedback.module.css'

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => { // компонент приймає пропси з App.jsx
  const { good, neutral, bad } = feedback;

  return (
      <div>
      <ul className={s.list}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive: {positiveFeedbackPercentage}%</li>
          </ul>
      </div>
  );
}

export default Feedback;
