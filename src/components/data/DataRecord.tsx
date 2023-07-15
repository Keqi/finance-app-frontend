import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

// I need to refactor this class to use TS types
function DataRecord({financeRecord, handleDelete}: any) {
  return (
    <tr id={`finance-record-${financeRecord.id}`} className="text-center">
      <td>{financeRecord.date}</td>
      <td>{financeRecord.etf_capital}</td>
      <td>{financeRecord.etf_total}</td>
      <td className={`text text-${financeRecord.etfProfit() >= 0 ? "success" : "danger"}`}>{financeRecord.etfProfit().toFixed(2)}</td>
      <td className={`text text-${financeRecord.etfPercentageProfit() >= 0 ? "success" : "danger"}`}>{financeRecord.etfPercentageProfit().toFixed(2)}</td>

      <td>{financeRecord.bonds_capital}</td>
      <td>{financeRecord.bonds_total}</td>
      <td className={`text text-${financeRecord.bondsProfit() >= 0 ? "success" : "danger"}`}>{financeRecord.bondsProfit().toFixed(2)}</td>
      <td className={`text text-${financeRecord.bondsPercentageProfit() >= 0 ? "success" : "danger"}`}>{financeRecord.bondsPercentageProfit().toFixed(2)}</td>

      <td>{financeRecord.etfDistribution().toFixed(2)}</td>
      <td>{financeRecord.bondsDistribution().toFixed(2)}</td>
      <td>{financeRecord.exchange_rate}</td>

      <td>{financeRecord.capitalValue().toFixed(2)}</td>
      <td>{financeRecord.totalValue().toFixed(2)}</td>
      <td className={`text text-${financeRecord.totalProfit() >= 0 ? "success" : "danger"}`}>{financeRecord.totalProfit().toFixed(2)}</td>
      <td className={`text text-${financeRecord.totalPercentageProfit() >= 0 ? "success" : "danger"}`}>{financeRecord.totalPercentageProfit().toFixed(2)}</td>
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
