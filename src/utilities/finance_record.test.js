import FinanceRecord from './finance_record';

let financeRecord;

beforeEach(() => {
  financeRecord = new FinanceRecord({
    id: 1,
    etf_capital: 5000,
    etf_total: 5500,
    bonds_capital: 10000,
    bonds_total: 12000,
    exchange_rate: 4,
    inflation: 5.0,
    date: '2023-01-31'
  })
});

test('calculates bonds distribution', () => {
  expect(financeRecord.bondsDistribution()).toBeGreaterThan(35);
  expect(financeRecord.bondsDistribution()).toBeLessThan(36);
});

test('calculates ETF distribution', () => {
  expect(financeRecord.etfDistribution()).toBeGreaterThan(64);
  expect(financeRecord.etfDistribution()).toBeLessThan(65);
});

test('calculates bonds profit', () => {
  expect(financeRecord.bondsProfit()).toEqual(2000);
});

test('calculates ETF profit', () => {
  expect(financeRecord.etfProfit()).toEqual(500);
});

test('calculates bonds percentage profit', () => {
  expect(financeRecord.bondsPercentageProfit()).toEqual(20);
});

test('calculates ETF percentage profit', () => {
  expect(financeRecord.etfPercentageProfit()).toEqual(10);
});

test('calculates capital value', () => {
  expect(financeRecord.capitalValue()).toEqual(30000);
});

test('calculates total value', () => {
  expect(financeRecord.totalValue()).toEqual(34000);
});