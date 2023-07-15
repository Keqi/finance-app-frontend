export interface DataRecordInterface {
  financeRecord: FinanceRecordInterface;
  handleDelete: (event: any) => void;
}

export interface FinanceRecordInterface {
  id: number;
  etf_capital: number;
  etf_total: number;
  bonds_capital: number;
  bonds_total: number;
  exchange_rate: number;
  inflation: number;
  date: string;

  bondsDistribution: () => number;
  bondsProfit: () => number;
  bondsPercentageProfit: () => number;
  capitalValue: () => number;
  etfDistribution: () => number;
  etfProfit: () => number;
  etfPercentageProfit: () => number;
  totalProfit: () => number;
  totalPercentageProfit: () => number;
  totalValue: () => number;
}

export interface FinanceRecordListInterface {
  financeRecords: FinanceRecordInterface[];
}

export interface NavbarLinkItemInterface {
  name: string;
  link: string;
}
