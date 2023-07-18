import React from 'react';
import ReactDOM from 'react-dom';
import Charts from './Data';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Charts/>).toJSON();
  expect(tree).toMatchSnapshot();
});