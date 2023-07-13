import {useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";

function InsertRecord() {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    etfCapital: location.state ? location.state.etfCapital : '',
    etfTotal: location.state ? location.state.etfTotal : '',
    bondsCapital: location.state ? location.state.bondsCapital : '',
    bondsTotal: location.state ? location.state.bondsTotal : '',
    exchangeRate: location.state ? location.state.exchangeRate : '',
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
              <input type="number" value={formData.etfCapital} onChange={handleChange} className="form-control" id="etfCapital" aria-describedby="etfCapitalHelp"/>
              <div id="etfCapitalHelp" className="form-text">Provide your capital in ETF.</div>
            </div>
          </div>

          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="etfTotal" className="form-label">ETF Total</label>
              <input type="number" value={formData.etfTotal} onChange={handleChange} className="form-control" id="etfTotal" aria-describedby="etfTotalHelp"/>
              <div id="etfTotalHelp" className="form-text">Provide your total value in ETF.</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="bondsCapital" className="form-label">Bonds Capital</label>
              <input type="number" value={formData.bondsCapital} onChange={handleChange} className="form-control" id="bondsCapital" aria-describedby="bondsCapitalHelp"/>
              <div id="bondsCapitalHelp" className="form-text">Provide your capital value in bonds.</div>
            </div>
          </div>

          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="bondsTotal" className="form-label">Bonds Total</label>
              <input type="number" value={formData.bondsTotal} onChange={handleChange} className="form-control" id="bondsTotal" aria-describedby="bondsTotalHelp"/>
              <div id="bondsTotalHelp" className="form-text">Provide your total value in bonds.</div>
            </div>
          </div>
        </div>

        <h3 className="text-center my-3">Additional Data</h3>

        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="exchangeRate" className="form-label">Exchange Rate</label>
              <input type="number" value={formData.exchangeRate} onChange={handleChange} className="form-control" id="exchangeRate" aria-describedby="exchangeRateHelp"/>
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
