import DataHeader from "./data/DataHeader"
import DataRecord from "./data/DataRecord"

function Data() {
  const initialData = [
    {
      date: 'Nov-2022',
      etf: { capital: 0, total: 0 },
      bonds: { capital: 15000, total: 15043.5 },
      inflation: 0,
      exchangeRate: 4.5
    },
    {
      date: 'Dec-2022',
      etf: { capital: 9300, total: 8787 },
      bonds: { capital: 22500, total: 22674 },
      inflation: 0.1,
      exchangeRate: 4.4
    },
    {
      date: 'Jan-2022',
      etf: { capital: 13150, total: 13619.45 },
      bonds: { capital: 38500, total: 38896.65 },
      inflation: 2.6,
      exchangeRate: 4.35
    }
  ];

  return (
    <div className="Data">
      <table className="table table-bordered mt-4">
        <thead>
          <tr className="text-center">
            <th scope="col"></th>
            <th scope="col" colSpan="4"><p>ETF (USD)</p></th>
            <th scope="col" colSpan="4">Bonds (PLN)</th>
            <th scope="col" colSpan="3">Distribution</th>
            <th scope="col" colSpan="5">Total PLN</th>
          </tr>
        </thead>
        <tbody>
          <DataHeader/>

          {initialData.map((item, index)=>{
            return <DataRecord
                     date={item.date}
                     etf={item.etf}
                     bonds={item.bonds}
                     inflation={item.inflation}
                     exchangeRate={item.exchangeRate}
                   />
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
