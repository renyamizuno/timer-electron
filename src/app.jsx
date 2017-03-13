import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';

const mountNode = document.getElementById('js-root');

if (mountNode) {
  render(
    <App />,
    mountNode
  );
}