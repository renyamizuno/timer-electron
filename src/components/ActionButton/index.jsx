import React from 'react';
import uuid from 'uuid';
import style from './action-button.css';

export { style };

export default class ActionButton extends React.Component {
  static get propTypes() {
    return {
      onClick: React.PropTypes.func
    };
  }

  static get defaultProps() {
    return {
      onClick: () => {}
    };
  }

  constructor(...args) {
    super(...args);
    this.state = { repples: [] };
  }

  onAnimationEnd(uuidKey) {
    const { repples } = this.state;

    this.setState({ repples: repples.filter(ripple => ripple.uuid !== uuidKey) });
  }

  onClick(e) {
    const { repples } = this.state;
    const button = this.refs.button.getBoundingClientRect();
    const y = e.clientY - button.top;
    const x = e.clientX - button.left;

    this.setState({ repples: [...repples, { uuid: uuid(), x, y }] });
    this.props.onClick(e);
  }

  render() {
    const { repples } = this.state;

    return (
      <button className={style.actionButton} onClick={this.onClick.bind(this)} ref="button">
        ▶
        { repples.map(repple => (
          <div
            key={repple.uuid}
            className={style.ripple}
            style={{ left: repple.x, top: repple.y }}
            onAnimationEnd={this.onAnimationEnd.bind(this, repple.uuid)}
          />
        )) }
      </button>
    );
  }
}
