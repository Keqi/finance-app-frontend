import DataHeader from "./data/DataHeader"
import DataRecord from "./data/DataRecord"

import { useEffect, useState } from 'react';

function Data() {
  const [financeRecords, setFinanceRecords] = useState([]);

  const fetchFinanceRecords = async () => {
    await fetch("http://localhost:3001/finance_records")
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
    <div className="Data">
      <table className="table table-bordered mt-4">
        <thead>
          <tr className="text-center">
            <th className="fs-4" scope="col"></th>
            <th className="fs-4" scope="col" colSpan="4">ETF (USD)</th>
            <th className="fs-4" scope="col" colSpan="4">Bonds (PLN)</th>
            <th className="fs-4" scope="col" colSpan="3">Distribution</th>
            <th className="fs-4" scope="col" colSpan="5">Total PLN</th>
          </tr>
        </thead>
        <tbody>
          <DataHeader/>

          {financeRecords.map((item, index)=>{
            return <DataRecord
                     key={index}
                     date={item.date}
                     etf={{capital: item.etf_capital, total: item.etf_total}}
                     bonds={{capital: item.bonds_capital, total: item.bonds_total}}
                     inflation={item.inflation}
                     exchangeRate={item.exchange_rate}
                   />
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
