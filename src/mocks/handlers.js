import { rest } from 'msw'

const mockedDataResponse = [{
  id: 1,
  bonds_capital: 50000,
  bonds_total: 60000,
  date: '2023-01-31',
  etf_capital: 10000,
  etf_total: 12000,
  exchange_rate: 4.05,
  inflation: 4.1
}]

export const handlers = [
  rest.put(`/finance_records/${mockedDataResponse[0].id}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedDataResponse[0]))
  }),

  rest.get(`/finance_records`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedDataResponse))
  })
]