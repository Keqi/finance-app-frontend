export function calculateProfit(capital, total) {
  return (total - capital).toFixed(2);
}

export function calculatePercentageProfit(capital, total) {
  return (((total - capital)/capital)*100).toFixed(2);
}

export function calculateBondsDistribution(etfTotal, bondsTotal, exchangeRate) {
  return (((bondsTotal) / ((etfTotal * exchangeRate) + bondsTotal))*100).toFixed(2);
}

export function calculateETFDistribution(etfTotal, bondsTotal, exchangeRate) {
  return (((etfTotal * exchangeRate) / (bondsTotal + (etfTotal * exchangeRate)))*100).toFixed(2);
}

export function calculateTotalValue(etf, bonds, exchangeRate) {
  return bonds + etf * exchangeRate;
}