import React from 'react';
import s from './Options.module.css';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => { //← компонент приймає функції оновлення лічильника, зкидування лічильника та підрахунку відгуків
  return (
      <div className={s.btnContainer}>
          <button onClick={() => updateFeedback("good")} className={s.optionBtn} type="button">Good</button>
          <button onClick={() => updateFeedback("neutral")} className={s.optionBtn} type="button">Neutral</button>
          <button onClick={() => updateFeedback("bad")} className={s.optionBtn} type="button">Bad</button>
          {totalFeedback > 0 && ( //← Якщо кількість відгуків більша за 0, тоді рендеримо ще одну кнопку Зкидування лічильника
              <button onClick={resetFeedback} className={s.optionBtn} type="button">Reset</button>
          )}
      </div>
  );
}

export default Options;
