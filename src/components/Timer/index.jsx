import React from 'react';
import style from './timer.css';
import moment from 'moment';

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
    const time = moment(this.state.date).format('h:mm:ss');

    return (
      <div className={style.oval}>
        <div className={style.time}>{time}</div>
      </div>
    );
  }
}
