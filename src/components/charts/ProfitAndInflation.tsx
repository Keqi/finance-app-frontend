import { Chart, registerables } from 'chart.js';
import { Line } from "react-chartjs-2";
import { calculatePercentageProfit, calculateTotalValue } from "./../../utilities/calc"
import { FinanceRecordInterface, FinanceRecordListInterface } from './../../interfaces/interfaces'

function ProfitAndInflation({financeRecords}: FinanceRecordListInterface) {
  Chart.register(...registerables);

  return (
    <Line
      data={{
        labels: financeRecords.map((record: FinanceRecordInterface) => record.date),
        datasets: [
          {
            label: 'Inflation',
            backgroundColor: "red",
            borderColor: "red",
            data: financeRecords.map((record: FinanceRecordInterface) => record.inflation)
          },
          {
            label: 'Profit',
            backgroundColor: "blue",
            borderColor: "blue",
            data: financeRecords.map((record: FinanceRecordInterface) => calculatePercentageProfit(calculateTotalValue(record.etf_capital, record.bonds_capital, record.exchange_rate), calculateTotalValue(record.etf_total, record.bonds_total, record.exchange_rate)))
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
