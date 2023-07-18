import React from 'react';
import ReactDOM from 'react-dom';
import Data from './Data';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Data/>).toJSON();
  expect(tree).toMatchSnapshot();
});