import {useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";

function InsertRecord() {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    etf_capital: location.state ? location.state.etf_capital : '',
    etf_total: location.state ? location.state.etf_total : '',
    bonds_capital: location.state ? location.state.bonds_capital : '',
    bonds_total: location.state ? location.state.bonds_total : '',
    exchange_rate: location.state ? location.state.exchange_rate : '',
    inflation: location.state ? location.state.inflation : '',
    date: location.state ? location.state.date : ''
  });

	const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
	};

  const handleSubmit = async (event) => {
    event.preventDefault();

    const recordId = location.state ? location.state.id : undefined;
    let url;
    let method;

    try {
      if(recordId) {
        url = `http://localhost:3001/finance_records/${recordId}`
        method = "PUT"
      } else {
        url = "http://localhost:3001/finance_records"
        method = "POST"
      }

      let response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        navigate("/");
      } else {
        console.log("API request failed.")
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <h3 className="text-center my-3">Financial Data</h3>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="etfCapital" className="form-label">ETF Capital</label>
              <input type="number" value={formData.etf_capital} onChange={handleChange} className="form-control" id="etf_capital" aria-describedby="etfCapitalHelp"/>
              <div id="etfCapitalHelp" className="form-text">Provide your capital in ETF.</div>
            </div>
          </div>

          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="etfTotal" className="form-label">ETF Total</label>
              <input type="number" value={formData.etf_total} onChange={handleChange} className="form-control" id="etf_total" aria-describedby="etfTotalHelp"/>
              <div id="etfTotalHelp" className="form-text">Provide your total value in ETF.</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="bondsCapital" className="form-label">Bonds Capital</label>
              <input type="number" value={formData.bonds_capital} onChange={handleChange} className="form-control" id="bonds_capital" aria-describedby="bondsCapitalHelp"/>
              <div id="bondsCapitalHelp" className="form-text">Provide your capital value in bonds.</div>
            </div>
          </div>

          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="bondsTotal" className="form-label">Bonds Total</label>
              <input type="number" value={formData.bonds_total} onChange={handleChange} className="form-control" id="bonds_total" aria-describedby="bondsTotalHelp"/>
              <div id="bondsTotalHelp" className="form-text">Provide your total value in bonds.</div>
            </div>
          </div>
        </div>

        <h3 className="text-center my-3">Additional Data</h3>

        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="exchangeRate" className="form-label">Exchange Rate</label>
              <input type="number" value={formData.exchange_rate} onChange={handleChange} className="form-control" id="exchange_rate" aria-describedby="exchangeRateHelp"/>
              <div id="exchangeRateHelp" className="form-text">USD/PLN exchange rate.</div>
            </div>
          </div>

          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="inflation" className="form-label">Inflation</label>
              <input type="number" value={formData.inflation} onChange={handleChange} className="form-control" id="inflation" aria-describedby="inflationHelp"/>
              <div id="inflationHelp" className="form-text">Accumulated inflation since the beginning of investments.</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Date</label>
              <input type="date" value={formData.date} onChange={handleChange} className="form-control" id="date" aria-describedby="dateHelp" required/>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col d-flex justify-content-center">
            <button type="submit" className="btn btn-primary btn-lg text-center">Submit</button>
          </div>
        </div>
      </form>
  );
}

export default InsertRecord;
