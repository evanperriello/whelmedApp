import React from 'react';
import ReactDOM from 'react-dom';
import ListCollection from './ListCollection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListCollection />, div);
});