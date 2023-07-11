import {
  calculateBondsDistribution,
  calculateTotalValue,
  calculateETFDistribution,
  calculateProfit,
  calculatePercentageProfit
} from "./../../utilities/calc"

function DataRecord({date, etf, bonds, exchangeRate, inflation}) {
  return (
    <tr className="text-center">
      <td>{date}</td>
      <td>{etf.capital}</td>
      <td>{etf.total}</td>
      <td>{calculateProfit(etf.capital, etf.total)}</td>
      <td>{calculatePercentageProfit(etf.capital, etf.total)}</td>

      <td>{bonds.capital}</td>
      <td>{bonds.total}</td>
      <td>{calculateProfit(bonds.capital, bonds.total)}</td>
      <td>{calculatePercentageProfit(bonds.capital, bonds.total)}</td>

      <td>{calculateETFDistribution(etf.total, bonds.total, exchangeRate)}</td>
      <td>{calculateBondsDistribution(etf.total, bonds.total, exchangeRate)}</td>
      <td>{exchangeRate}</td>

      <td>{calculateTotalValue(etf.capital, bonds.capital, exchangeRate)}</td>
      <td>{calculateTotalValue(etf.total, bonds.total, exchangeRate)}</td>
      <td>
        {calculateProfit(
          calculateTotalValue(etf.capital, bonds.capital, exchangeRate), calculateTotalValue(etf.total, bonds.total, exchangeRate)
        )}
      </td>
      <td>
      { calculatePercentageProfit(
        calculateTotalValue(etf.capital, bonds.capital, exchangeRate), calculateTotalValue(etf.total, bonds.total, exchangeRate)
      )}
      </td>
      <td>{inflation}</td>
    </tr>
  );
}

export default DataRecord;
