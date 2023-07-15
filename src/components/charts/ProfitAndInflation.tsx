import { Chart, registerables } from 'chart.js';
import { Line } from "react-chartjs-2";
import { FinanceRecordListInterface } from './../../interfaces/interfaces'

function ProfitAndInflation({financeRecords}: FinanceRecordListInterface) {
  Chart.register(...registerables);

  return (
    <Line
      data={{
        labels: financeRecords.map(record => record.date),
        datasets: [
          {
            label: 'Inflation',
            backgroundColor: "red",
            borderColor: "red",
            data: financeRecords.map(record => record.inflation)
          },
          {
            label: 'Profit',
            backgroundColor: "blue",
            borderColor: "blue",
            data: financeRecords.map(record => record.totalPercentageProfit())
          }
        ]
      }}

      options={{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Profit / Inflation'
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
              title: { display: true, text: 'Profit / Inflation (%)' }
          }
        }
      }}
    />
  );
}

export default ProfitAndInflation;
