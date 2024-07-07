import React from 'react';

import Description from './Description/Description';
import Option from "./Option/Option";
// import Feedbeck from "./Feedback/Feedbeck";

import s from './App.module.css'

const App = () => {
  return (
      <div className={s.container}>
          <Description />
          <Option />
          {/* <Feedback /> */}
      </div>
  )
}

export default App;