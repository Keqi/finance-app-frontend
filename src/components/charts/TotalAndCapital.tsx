import { Chart, registerables } from 'chart.js';
import { Line } from "react-chartjs-2";
import { FinanceRecordInterface, FinanceRecordListInterface } from './../../interfaces/interfaces'
import FinanceRecord from './../../utilities/finance_record'


function TotalAndCapital({financeRecords}: FinanceRecordListInterface) {
  Chart.register(...registerables);

  return (
    <Line
      data={{
        labels: financeRecords.map(record => record.date),
        datasets: [
          {
            label: 'Total',
            backgroundColor: "red",
            borderColor: "red",
            data: financeRecords.map(record => record.totalValue()),
          },
          {
            label: 'Capital',
            backgroundColor: "blue",
            borderColor: "blue",
            data: financeRecords.map(record => record.capitalValue()),
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
