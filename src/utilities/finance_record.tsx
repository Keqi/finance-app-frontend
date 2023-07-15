import { FinanceRecordInterface } from './../interfaces/interfaces'

class FinanceRecord {
  id: number;
  etf_capital: number;
  etf_total: number;
  bonds_capital: number;
  bonds_total: number;
  exchange_rate: number;
  inflation: number;
  date: string;

  constructor(record: FinanceRecordInterface) {
    this.id = record.id;
    this.date = record.date;
    this.inflation = record.inflation;
    this.exchange_rate = record.exchange_rate;
    this.etf_capital = record.etf_capital;
    this.etf_total = record.etf_total;
    this.bonds_capital = record.bonds_capital;
    this.bonds_total = record.bonds_total;
  }

  bondsDistribution() {
    return (((this.bonds_total) / ((this.etf_total * this.exchange_rate) + this.bonds_total))*100);
  }

  bondsProfit() {
    return (this.bonds_total - this.bonds_capital);
  }

  bondsPercentageProfit() {
    return (((this.bonds_total - this.bonds_capital)/this.bonds_capital)*100);
  }

  capitalValue() {
    return (this.bonds_capital + this.etf_capital * this.exchange_rate);
  }

  etfDistribution() {
    return (((this.etf_total * this.exchange_rate) / (this.bonds_total + (this.etf_total * this.exchange_rate)))*100);
  }

  etfProfit() {
    return (this.etf_total - this.etf_capital);
  }

  etfPercentageProfit() {
    return (((this.etf_total - this.etf_capital)/this.etf_capital)*100);
  }

  totalProfit() {
    return this.totalValue() - this.capitalValue();
  }

  totalPercentageProfit() {
    return (this.totalValue() / this.capitalValue())*100 - 100;
  }

  totalValue() {
    return (this.bonds_total + this.etf_total * this.exchange_rate);
  }
}

export default FinanceRecord