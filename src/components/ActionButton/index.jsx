import React from 'react';
import style from './action-button.css';

export default class ActionButton extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { ripple: false, x: 0, y: 0 };
  }

  onAnimationEnd() {
    this.setState({ ripple: false, x: 0, y: 0 });
  }

  onClick(e) {
    const button = this.refs.button.getBoundingClientRect();
    const y = e.clientY - button.top;
    const x = e.clientX - button.left;
    this.setState({ ripple: true, x, y });
  }

  render() {
    const repple = this.state.ripple ? 'clicked' : null;
    return (
      <button className={style.actionButton} onClick={this.onClick.bind(this)} ref="button">
        ▶
        <div className={style.ripple} style={{ left: this.state.x, top: this.state.y }} data-type={repple} onAnimationEnd={this.onAnimationEnd.bind(this)} />
      </button>
    );
  }
}
