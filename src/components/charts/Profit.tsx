import { Chart, registerables } from 'chart.js';
import { Bar } from "react-chartjs-2";
import { FinanceRecordInterface, FinanceRecordListInterface } from './../../interfaces/interfaces'
import FinanceRecord from './../../utilities/finance_record'

function Profit({financeRecords}: FinanceRecordListInterface) {
  Chart.register(...registerables);

  return (
    <Bar
      data={{
        labels: financeRecords.map(record => record.date),
        datasets: [
          {
            label: 'Total',
            backgroundColor: "blue",
            borderColor: "blue",
            data: financeRecords.map(record => record.totalProfit())
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
