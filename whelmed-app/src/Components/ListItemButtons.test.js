import React from 'react';
import ReactDOM from 'react-dom';
import ListItemButtons from './ListItemButtons';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListItemButtons />, div);
});