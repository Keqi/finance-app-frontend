import { useEffect, useState } from 'react';

import TotalAndCapital from './charts/TotalAndCapital'
import Profit from './charts/Profit'
import ProfitAndInflation from './charts/ProfitAndInflation'

function Charts() {
  const [financeRecords, setFinanceRecords] = useState([]);

  const fetchFinanceRecords = async () => {
    await fetch(`${process.env.REACT_APP_BACKEND_HOST}/finance_records`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setFinanceRecords(data)
      })
  }

  useEffect(() => {
    fetchFinanceRecords()
  }, [])

  return (
    <div className="chart-container">
      <TotalAndCapital financeRecords={financeRecords} />
      <Profit financeRecords={financeRecords} />
      <ProfitAndInflation financeRecords={financeRecords} />
    </div>
  );
}

export default Charts;
