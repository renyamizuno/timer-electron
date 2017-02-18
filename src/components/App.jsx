import React from 'react';
import style from './app.css';

import ActionButton from 'components/ActionButton';

export default class App extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <div>Timer</div>
        <div className={style.app_actionButtonLayout}>
          <ActionButton />
        </div>
      </div>
    );
  }
}
