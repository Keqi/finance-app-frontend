export function calculateProfit(capital: number, total: number) {
  return (total - capital);
}

export function calculatePercentageProfit(capital: number, total: number) {
  return (((total - capital)/capital)*100);
}

export function calculateBondsDistribution(etfTotal: number, bondsTotal: number, exchangeRate: number) {
  return (((bondsTotal) / ((etfTotal * exchangeRate) + bondsTotal))*100);
}

export function calculateETFDistribution(etfTotal: number, bondsTotal: number, exchangeRate: number) {
  return (((etfTotal * exchangeRate) / (bondsTotal + (etfTotal * exchangeRate)))*100);
}

export function calculateTotalValue(etf: number, bonds: number, exchangeRate: number) {
  return (bonds + etf * exchangeRate);
}