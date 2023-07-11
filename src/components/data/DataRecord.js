import {
  calculateBondsDistribution,
  calculateTotalValue,
  calculateETFDistribution,
  calculateProfit,
  calculatePercentageProfit
} from "./../../utilities/calc"

function DataRecord({date, etf, bonds, exchangeRate, inflation}) {
  const bondsDistribution = calculateBondsDistribution(etf.total, bonds.total, exchangeRate);
  const bondsProfit = calculateProfit(bonds.capital, bonds.total);
  const bondsPercentageProfit = calculatePercentageProfit(bonds.capital, bonds.total);

  const etfDistribution = calculateETFDistribution(etf.total, bonds.total, exchangeRate);
  const etfProfit = calculateProfit(etf.capital, etf.total);
  const etfPercentageProfit = calculatePercentageProfit(etf.capital, etf.total);

  const totalProfit = calculateProfit(
    calculateTotalValue(etf.capital, bonds.capital, exchangeRate), calculateTotalValue(etf.total, bonds.total, exchangeRate)
  )

  const totalPercentageProfit = calculatePercentageProfit(
    calculateTotalValue(etf.capital, bonds.capital, exchangeRate), calculateTotalValue(etf.total, bonds.total, exchangeRate)
  )

  return (
    <tr className="text-center">
      <td>{date}</td>
      <td>{etf.capital}</td>
      <td>{etf.total}</td>
      <td className={`text text-${etfProfit >= 0 ? "success" : "danger"}`}>{etfProfit}</td>
      <td className={`text text-${etfPercentageProfit >= 0 ? "success" : "danger"}`}>{etfPercentageProfit}</td>

      <td>{bonds.capital}</td>
      <td>{bonds.total}</td>
      <td className={`text text-${bondsProfit >= 0 ? "success" : "danger"}`}>{bondsProfit}</td>
      <td className={`text text-${bondsPercentageProfit >= 0 ? "success" : "danger"}`}>{bondsPercentageProfit}</td>

      <td>{etfDistribution}</td>
      <td>{bondsDistribution}</td>
      <td>{exchangeRate}</td>

      <td>{calculateTotalValue(etf.capital, bonds.capital, exchangeRate)}</td>
      <td>{calculateTotalValue(etf.total, bonds.total, exchangeRate)}</td>
      <td className={`text text-${totalProfit >= 0 ? "success" : "danger"}`}>{totalProfit}</td>
      <td className={`text text-${totalPercentageProfit >= 0 ? "success" : "danger"}`}>{totalPercentageProfit}</td>
      <td>{inflation}</td>
    </tr>
  );
}

export default DataRecord;
