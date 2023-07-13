import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

import {
  calculateBondsDistribution,
  calculateTotalValue,
  calculateETFDistribution,
  calculateProfit,
  calculatePercentageProfit
} from "./../../utilities/calc"

function DataRecord({id, date, etf, bonds, exchangeRate, inflation, handleDelete}) {
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
    <tr id={`finance-record-${id}`} className="text-center">
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

      <td>
        <Link
          to="/insert-record"
          state={
            {
              id: id,
              etf_capital: etf.capital,
              etf_total: etf.total,
              bonds_capital: bonds.capital,
              bonds_total: bonds.total,
              exchange_rate: exchangeRate,
              inflation: inflation,
              date: date
            }
          }>

          <FontAwesomeIcon className="m-2" icon={faPen} />
        </Link>

        <a href="/" record-id={id} onClick={handleDelete}>
          <FontAwesomeIcon className="m-2" icon={faTrash}  />
        </a>
      </td>
    </tr>
  );
}

export default DataRecord;
