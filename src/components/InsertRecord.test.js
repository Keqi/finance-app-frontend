import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import InsertRecord from './InsertRecord';

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import * as routeData from 'react-router';

const useLocation = jest.spyOn(routeData, 'useLocation');
const useNavigate = jest.spyOn(routeData, 'useNavigate');

const mockedState = {
  id: 1,
  bonds_capital: 50000,
  bonds_total: 60000,
  date: '2023-01-31',
  etf_capital: 10000,
  etf_total: 12000,
  exchange_rate: 4.05,
  inflation: 4.1
};

describe('renders all form fields on the page', () => {
  beforeEach(() => {
    useLocation.mockReturnValue({ pathname: '/insert-record', search: '', state: {}, hash: ''});

    render(<MemoryRouter><InsertRecord/></MemoryRouter>);
  });

  it("should render the etf capital field", () => {
    expect(screen.getByRole("spinbutton", { name: "ETF Capital" })).toBeInTheDocument();
  });

  it("should render the etf total field", () => {
    expect(screen.getByRole("spinbutton", { name: "ETF Total" })).toBeInTheDocument();
  });

  it("should render the bonds capital field", () => {
    expect(screen.getByRole("spinbutton", { name: "Bonds Capital" })).toBeInTheDocument();
  });

  it("should render the bonds total field", () => {
    expect(screen.getByRole("spinbutton", { name: "Bonds Total" })).toBeInTheDocument();
  });

  it("should render the exchange rate field", () => {
    expect(screen.getByRole("spinbutton", { name: "Exchange Rate" })).toBeInTheDocument();
  });

  it("should render the inflation field", () => {
    expect(screen.getByRole("spinbutton", { name: "Inflation" })).toBeInTheDocument();
  });

  it("should render the date field", () => {
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
  });
});

describe('fills out form fields with state from the location object', () => {
  beforeEach(() => {
    useLocation.mockReturnValue({ pathname: '/insert-record', search: '', state: mockedState, hash: ''});

    render(<MemoryRouter>
      <InsertRecord/>
    </MemoryRouter>);
  });

  it("should render the etf capital field with pre-filled value", () => {
    // screen.logTestingPlaygroundURL();
    expect(screen.getByRole("spinbutton", { name: "ETF Capital" })).toHaveValue(mockedState.etf_capital)
  });

  it("should render the etf capital field with pre-filled value", () => {
    expect(screen.getByRole("spinbutton", { name: "ETF Total" })).toHaveValue(mockedState.etf_total)
  });

  it("should render the bonds capital field with pre-filled value", () => {
    expect(screen.getByRole("spinbutton", { name: "Bonds Capital" })).toHaveValue(mockedState.bonds_capital)
  });

  it("should render the bonds capital field with pre-filled value", () => {
    expect(screen.getByRole("spinbutton", { name: "Bonds Total" })).toHaveValue(mockedState.bonds_total)
  });

  it("should render the exchange_rate field with pre-filled value", () => {
    expect(screen.getByRole("spinbutton", { name: "Exchange Rate" })).toHaveValue(mockedState.exchange_rate)
  });

  it("should render the inflation field with pre-filled value", () => {
    expect(screen.getByRole("spinbutton", { name: "Inflation" })).toHaveValue(mockedState.inflation)
  });

  it("should render the bonds capital field with pre-filled value", () => {
    expect(screen.getByLabelText(/date/i)).toHaveValue(mockedState.date)
  });
});

describe('submits the form', () => {
  const server = setupServer(
    rest.put(`${process.env.REACT_APP_BACKEND_HOST}/finance_records/${mockedState.id}`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockedState))
    }),
  )

  beforeAll(() => server.listen())

  beforeEach(() => {
    useLocation.mockReturnValue({ pathname: '/insert-record', search: '', state: mockedState, hash: ''});

    render(<MemoryRouter>
      <InsertRecord/>
    </MemoryRouter>);
  });

  afterEach(() => {
    server.resetHandlers()
  });

  afterAll(() => server.close())

  // This test doesn't make much sense but I'll keep for MSW configuration for now.
  it("should render the bonds capital field with pre-filled value", async () => {
    fireEvent.click(screen.getByRole('button', { name: /submit/i }))
    await waitFor(() => expect(useNavigate).toHaveBeenCalledTimes(1));
  });
});