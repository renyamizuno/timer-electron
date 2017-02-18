import React from 'react';
import style from './app.css';

export default class App extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <div>Timer</div>
        <button>push</button>
      </div>
    );
  }
}
