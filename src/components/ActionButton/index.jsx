import React from 'react';
import style from './action-button.css';

export default class ActionButton extends React.Component {
  render() {
    return (
      <button className={style.actionButton}>▶</button>
    );
  }
}
