import { Chart, registerables } from 'chart.js';
import { Line } from "react-chartjs-2";
import { useEffect, useState } from 'react';

import { calculateTotalValue } from "./../utilities/calc"

function Charts() {
  const [financeRecords, setFinanceRecords] = useState([]);

  Chart.register(...registerables);

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
      <Line
        data={{
          labels: financeRecords.map(record => record.date),
          datasets: [
            {
              label: 'Total',
              backgroundColor: "red",
              borderColor: "red",
              data: financeRecords.map(record => calculateTotalValue(record.etf_total, record.bonds_total, record.exchange_rate)),
            },
            {
              label: 'Capital',
              backgroundColor: "blue",
              borderColor: "blue",
              data: financeRecords.map(record => calculateTotalValue(record.etf_capital, record.bonds_capital, record.exchange_rate)),
            }
          ]
        }}

        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Total vs Capital'
            },
            legend: {
                display: true
            }
          },
          scales: {
            x: {
              title: { display: true, text: 'Date' }
            },
            y: {
                title: { display: true, text: 'Value (PLN)' }
            }
          }
        }}
      />
    </div>
  );
}

export default Charts;
