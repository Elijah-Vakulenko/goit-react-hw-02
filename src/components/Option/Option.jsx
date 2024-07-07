import React from 'react';

import s from './Option.module.css'

const Option = () => {
  return (
      <div className={s.btnContainer}>
          <button className={s.optionBtn} type="button">Good</button>
          <button className={s.optionBtn} type="button">Neutral</button>
          <button className={s.optionBtn} type="button">Bad</button>
          <button className={s.optionBtn} type="button">Reset</button>
    </div>
  )
}

export default Option;