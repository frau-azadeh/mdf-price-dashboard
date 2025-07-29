import Layout from "../components/layout/Layout";
import SearchBox from "../components/ui/SearchBox";
import FilterPanel from "../components/ui/FilterPanel";
import Table from "../components/ui/Table";
import StockByTypeChart from "../components/charts/StockByTypeChart";
import PriceLineChart from "../components/charts/PriceLineChart";
import { useState } from "react";

const sampleData = [
  {
    id: 1,
    name: "میلگرد A3",
    type: "آجدار",
    size: "16",
    stock: 120,
    price: 27000,
    lastUpdate: "1403/05/01",
  },
  {
    id: 2,
    name: "میلگرد A2",
    type: "ساده",
    size: "14",
    stock: 80,
    price: 25000,
    lastUpdate: "1403/05/01",
  },
  // داده‌های بیشتر برای تست
];

const Analytics = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");

  const filtered = sampleData.filter(
    (item) =>
      (item.name.includes(query) || item.type.includes(query)) &&
      (type === "" || item.type === type) &&
      (size === "" || item.size === size)
  );

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">تحلیل قیمت میلگرد</h1>

      <div className="bg-white rounded-lg shadow p-4 space-y-4">
        <SearchBox value={query} onChange={setQuery} />
        <FilterPanel
          type={type}
          size={size}
          onTypeChange={setType}
          onSizeChange={setSize}
        />
        <Table data={filtered} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">نمودار تغییر قیمت</h2>
          <PriceLineChart />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">موجودی بر اساس نوع</h2>
          <StockByTypeChart />
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
