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
  