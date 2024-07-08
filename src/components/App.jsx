import React, { useState } from 'react';

import Description from './Description/Description';
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

import s from './App.module.css';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
      <div className={s.container}>
          <Description />
          <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
          {totalFeedback > 0 ? (
            <Feedback 
              feedback={feedback} 
              totalFeedback={totalFeedback} 
              positiveFeedbackPercentage={positiveFeedbackPercentage} 
            />
          ) : (
            <Notification />
          )}
      </div>
  );
}

export default App;
