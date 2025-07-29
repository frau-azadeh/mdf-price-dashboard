// src/pages/Dashboard.tsx
import { useState } from "react";
import Layout from "../components/layout/Layout";
import Table from "../components/ui/Table";
import SearchBox from "../components/ui/SearchBox";


const Dashboard = () => {

    const [query, setQuery] = useState("");

  const sampleData = [
    {
      id: 1,
      name: "میلگرد A3",
      type: "آجدار",
      size: "16",
      stock: 100,
      price: 26500,
      lastUpdate: "1403/05/07",
    },
    {
      id: 2,
      name: "میلگرد A2",
      type: "ساده",
      size: "12",
      stock: 80,
      price: 24500,
      lastUpdate: "1403/05/07",
    },
  ];

  const filteredData = sampleData.filter(
    (item) =>
      item.name.includes(query) || item.type.includes(query)
  );

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">داشبورد مدیریت قیمت میلگرد</h1>
      
      {/* جدول قیمت‌ها */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
      <SearchBox value={query} onChange={setQuery} />
         <Table data={filteredData} />
      </div>

      {/* نمودارها */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4">نمودار ۱</div>
        <div className="bg-white rounded-lg shadow p-4">نمودار ۲</div>
        <div className="bg-white rounded-lg shadow p-4">نمودار ۳</div>
      </div>
    </Layout>
  );
};

export default Dashboard;
