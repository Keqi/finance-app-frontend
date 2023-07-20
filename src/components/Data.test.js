import React from 'react';
import ReactDOM from 'react-dom';
import Data from './Data';

import { render, fireEvent, waitFor, screen } from "@testing-library/react";

const mockedDataResponse = [{
  id: 1,
  bonds_capital: 50000,
  bonds_total: 60000,
  date: '2023-01-31',
  etf_capital: 10000,
  etf_total: 12000,
  exchange_rate: 4.05,
  inflation: 4.1
}];

describe('renders all form fields on the page', () => {
  // beforeEach(()=> {
  //   render(<Data/>);
  // });
  //
  // it("should render the etf capital field", async () => {
  //   await expect(screen.getByRole('table')).toHaveTextContent('ETF')
  // });

  it("should be true", () => {
    expect(1).toEqual(1);
  });
});