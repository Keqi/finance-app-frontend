import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});