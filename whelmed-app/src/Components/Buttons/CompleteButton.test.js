import React from 'react';
import ReactDOM from 'react-dom';
import CompleteButton from './CompleteButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompleteButton />, div);
});