export interface Product {
  id: number;
  name: string;
  type: string;
  size: string;
  stock?: number;
  price: number;
  lastUpdate?: string;
  lastPriceDate?: string | null;
  form?: string;
  standard?: string;
  warehouse?: string;
  unit?: string;
}

export interface PriceAnalysis {
  latest_date: string;
  summary: {
    average_price: number;
    max_price: number;
    min_price: number;
  };
  by_standard: {
    [key: string]: number;
  };
  total_records: number;
}
