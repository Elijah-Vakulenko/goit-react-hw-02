import React, { useState } from 'react';

import Description from './Description/Description';
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

import s from './App.module.css';

const App = () => {
  const [feedback, setFeedback] = useState({ //← через ctrl + space імпортую стейт
    good: 0,
    neutral: 0, // ← Встановлюю початкове значення лічильника передаючи значення в хук
    bad: 0
  });

  const updateFeedback = feedbackType => { // фідбек тайп це одна з кнопок яку ми вибираємо з Options.jsx (7-9) тицьнув на неї ми передаємо у функцію цей тип
    setFeedback(prev => ({ //далі міняємо значення за яке відповідає ця кнопка (прев це попереднє значення до того як ми клацнули)
      ...prev, //того ми беремо це значення, копіюємо його
      [feedbackType]: prev[feedbackType] + 1//тепер ми беремо ключ і значення нашого об'єету і збільшуємо на 1. тобто [той тип який ми обрали клацнувши на кнопку, наприклад good]: prev[минуле значення цього типу] + 1
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0, //← обнуляю лічильник
      bad: 0
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
      <div className={s.container}>
          <Description />
          <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
          {totalFeedback > 0 ? ( //← якщо загальна кількість відгуків більша ніж нуль то за тернарним виразом виводимо Статистику по відгукам, якщо нуль тоді виводимо компонент з нотифікацією.
            <Feedback 
              feedback={feedback} // передаю компоненту фідбек пропс у вигляді нашого хука (11)
              totalFeedback={totalFeedback} // передаю пропс загальну кількість відгуків (32)
              positiveFeedbackPercentage={positiveFeedbackPercentage} // пропс (33)
            />
          ) : (
            <Notification />
          )}
      </div>
  );
}

export default App;
