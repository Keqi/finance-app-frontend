import { Chart, registerables } from 'chart.js';
import { Line } from "react-chartjs-2";
import { calculateTotalValue } from "./../../utilities/calc"
import { FinanceRecordInterface, FinanceRecordListInterface } from './../../interfaces/interfaces'


function TotalAndCapital({financeRecords}: FinanceRecordListInterface) {
  Chart.register(...registerables);

  return (
    <Line
      data={{
        labels: financeRecords.map((record: FinanceRecordInterface) => record.date),
        datasets: [
          {
            label: 'Total',
            backgroundColor: "red",
            borderColor: "red",
            data: financeRecords.map((record: FinanceRecordInterface) => calculateTotalValue(record.etf_total, record.bonds_total, record.exchange_rate)),
          },
          {
            label: 'Capital',
            backgroundColor: "blue",
            borderColor: "blue",
            data: financeRecords.map((record: FinanceRecordInterface) => calculateTotalValue(record.etf_capital, record.bonds_capital, record.exchange_rate)),
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
  );
}

export default TotalAndCapital;