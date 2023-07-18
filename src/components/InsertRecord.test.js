import React from 'react';
import ReactDOM from 'react-dom';
import InsertRecord from './Data';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<InsertRecord/>).toJSON();
  expect(tree).toMatchSnapshot();
});