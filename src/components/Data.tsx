import DataHeader from "./data/DataHeader"
import DataRecord from "./data/DataRecord"

import { useEffect, useState } from 'react';

function Data() {
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

  const handleDelete = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const recordId = event.target.parentElement.parentElement.getAttribute("record-id");

    try {
      let response = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/finance_records/${recordId}`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
        fetchFinanceRecords();
      } else {
        console.log("API request failed.")
      }
    } catch (err) {
      console.log(err);
    }
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
            <th className="fs-4" scope="col" colSpan={4}>ETF (USD)</th>
            <th className="fs-4" scope="col" colSpan={4}>Bonds (PLN)</th>
            <th className="fs-4" scope="col" colSpan={3}>Distribution</th>
            <th className="fs-4" scope="col" colSpan={5}>Total PLN</th>
            <th className="fs-4" scope="col" colSpan={1}>Actions</th>
          </tr>
        </thead>
        <tbody>
          <DataHeader/>

          {financeRecords.map((item, index)=>{
            return <DataRecord
                     key={item.id}
                     financeRecord={item}
                     handleDelete={handleDelete}
                   />
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
