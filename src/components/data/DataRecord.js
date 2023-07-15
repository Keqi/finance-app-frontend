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

import { FinanceRecordInterface } from './../../interfaces/interfaces'

function DataRecord({financeRecord, handleDelete}) {
  const bondsDistribution = calculateBondsDistribution(financeRecord.etf_total, financeRecord.bonds_total, financeRecord.exchange_rate).toFixed(2);
  const bondsProfit = calculateProfit(financeRecord.bonds_capital, financeRecord.bonds_total).toFixed(2);
  const bondsPercentageProfit = calculatePercentageProfit(financeRecord.bonds_capital, financeRecord.bonds_total).toFixed(2);

  const etfDistribution = calculateETFDistribution(financeRecord.etf_total, financeRecord.bonds_total, financeRecord.exchange_rate).toFixed(2);
  const etfProfit = calculateProfit(financeRecord.etf_capital, financeRecord.etf_total).toFixed(2);
  const etfPercentageProfit = calculatePercentageProfit(financeRecord.etf_capital, financeRecord.etf_total).toFixed(2);

  const totalProfit = calculateProfit(
    calculateTotalValue(financeRecord.etf_capital, financeRecord.bonds_capital, financeRecord.exchange_rate), calculateTotalValue(financeRecord.etf_total, financeRecord.bonds_total, financeRecord.exchange_rate)
  ).toFixed(2)

  const totalPercentageProfit = calculatePercentageProfit(
    calculateTotalValue(financeRecord.etf_capital, financeRecord.bonds_capital, financeRecord.exchange_rate), calculateTotalValue(financeRecord.etf_total, financeRecord.bonds_total, financeRecord.exchange_rate)
  ).toFixed(2)

  return (
    <tr id={`finance-record-${financeRecord.id}`} className="text-center">
      <td>{financeRecord.date}</td>
      <td>{financeRecord.etf_capital}</td>
      <td>{financeRecord.etf_total}</td>
      <td className={`text text-${etfProfit >= 0 ? "success" : "danger"}`}>{etfProfit}</td>
      <td className={`text text-${etfPercentageProfit >= 0 ? "success" : "danger"}`}>{etfPercentageProfit}</td>

      <td>{financeRecord.bonds_capital}</td>
      <td>{financeRecord.bonds_total}</td>
      <td className={`text text-${bondsProfit >= 0 ? "success" : "danger"}`}>{bondsProfit}</td>
      <td className={`text text-${bondsPercentageProfit >= 0 ? "success" : "danger"}`}>{bondsPercentageProfit}</td>

      <td>{etfDistribution}</td>
      <td>{bondsDistribution}</td>
      <td>{financeRecord.exchange_rate}</td>

      <td>{calculateTotalValue(financeRecord.etf_capital, financeRecord.bonds_capital, financeRecord.exchange_rate)}</td>
      <td>{calculateTotalValue(financeRecord.etf_total, financeRecord.bonds_total, financeRecord.exchange_rate)}</td>
      <td className={`text text-${totalProfit >= 0 ? "success" : "danger"}`}>{totalProfit}</td>
      <td className={`text text-${totalPercentageProfit >= 0 ? "success" : "danger"}`}>{totalPercentageProfit}</td>
      <td>{financeRecord.inflation}</td>

      <td>
        <Link
          to="/insert-record"
          state={
            {
              id: financeRecord.id,
              etf_capital: financeRecord.etf_capital,
              etf_total: financeRecord.etf_total,
              bonds_capital: financeRecord.bonds_capital,
              bonds_total: financeRecord.bonds_total,
              exchange_rate: financeRecord.exchange_rate,
              inflation: financeRecord.inflation,
              date: financeRecord.date
            }
          }>

          <FontAwesomeIcon className="m-2" icon={faPen} />
        </Link>

        <a href="/" record-id={financeRecord.id} onClick={handleDelete}>
          <FontAwesomeIcon className="m-2" icon={faTrash}  />
        </a>
      </td>
    </tr>
  );
}

export default DataRecord;
