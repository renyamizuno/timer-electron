import React from 'react';
import style from './timer.css';

export default class Timer extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const time = this.state.date.toTimeString().replace(/ .*/, '');

    return (
      <div className={style.oval}>
        <div className={style.time}>{time}</div>
      </div>
      );
  }
}
