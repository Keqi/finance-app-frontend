import { Chart, registerables } from 'chart.js';
import { Bar } from "react-chartjs-2";
import { calculateProfit, calculateTotalValue } from "./../../utilities/calc"
import { FinanceRecordInterface, FinanceRecordListInterface } from './../../interfaces/interfaces'

function Profit({financeRecords}: FinanceRecordListInterface) {
  Chart.register(...registerables);

  return (
    <Bar
      data={{
        labels: financeRecords.map((record: FinanceRecordInterface) => record.date),
        datasets: [
          {
            label: 'Total',
            backgroundColor: "blue",
            borderColor: "blue",
            data: financeRecords.map((record: FinanceRecordInterface) => calculateProfit(calculateTotalValue(record.etf_capital, record.bonds_capital, record.exchange_rate), calculateTotalValue(record.etf_total, record.bonds_total, record.exchange_rate)))
          }
        ]
      }}

      options={{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Profit (PLN)'
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
              title: { display: true, text: 'Profit (PLN)' }
          }
        }
      }}
    />
  );
}

export default Profit;
