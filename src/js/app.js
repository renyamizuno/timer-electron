import React from 'react';
import { render } from 'react-dom';
import styles from './app.css';

const mountNode = document.getElementById('js-root');

console.dir(styles);

if (mountNode) {
  render(
    <div className={styles.appLayout}>asdf</div>,
    mountNode
  );
}