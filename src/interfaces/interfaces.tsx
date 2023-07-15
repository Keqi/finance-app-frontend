export interface FinanceRecordInterface {
  id: number;
  etf_capital: number;
  etf_total: number;
  bonds_capital: number;
  bonds_total: number;
  exchange_rate: number;
  inflation: number;
  date: string;
}

export interface FinanceRecordListInterface {
  financeRecords: FinanceRecordInterface[];
}

export interface NavbarLinkItemInterface {
  name: string;
  link: string;
}
