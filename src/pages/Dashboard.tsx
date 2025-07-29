// src/pages/Dashboard.tsx
import { useState } from "react";
import Layout from "../components/layout/Layout";
import Table from "../components/ui/Table";
import SearchBox from "../components/ui/SearchBox";
import FilterPanel from "../components/ui/FilterPanel";

import Pagination from "../components/ui/Pagination";
import DashboardChartLine from "../components/charts/DashboardChartLine";
import DashboardChartBar from "../components/charts/DashboardChartBar";
import DashboardChartPie from "../components/charts/DashboardChartPie";

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const sampleData = [
    // (میتونی دیتاهای بیشتری اضافه کنی برای تست صفحه‌بندی)
    { id: 1, name: "میلگرد A3", type: "آجدار", size: "16", stock: 100, price: 26500, lastUpdate: "1403/05/07" },
    { id: 2, name: "میلگرد A2", type: "ساده", size: "12", stock: 80, price: 24500, lastUpdate: "1403/05/07" },
    { id: 3, name: "میلگرد A4", type: "آجدار", size: "14", stock: 120, price: 28500, lastUpdate: "1403/05/07" },
    { id: 4, name: "میلگرد A3", type: "آجدار", size: "16", stock: 110, price: 27500, lastUpdate: "1403/05/07" },
    { id: 5, name: "میلگرد A2", type: "ساده", size: "12", stock: 70, price: 24000, lastUpdate: "1403/05/07" },
    { id: 6, name: "میلگرد A3", type: "آجدار", size: "16", stock: 90, price: 26000, lastUpdate: "1403/05/07" },
  ];

  const filteredData = sampleData.filter(
    (item) =>
      (item.name.includes(query) || item.type.includes(query)) &&
      (type === "" || item.type === type) &&
      (size === "" || item.size === size)
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">داشبورد مدیریت قیمت میلگرد</h1>
      
      {/* جدول قیمت‌ها */}
      <div className="bg-white rounded-lg shadow p-4 mb-6 space-y-4">
      <SearchBox value={query} onChange={setQuery} />
      <FilterPanel
        type={type}
        size={size}
        onTypeChange={setType}
        onSizeChange={setSize}
      />
<Table data={paginatedData} />
<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />

    </div>

      {/* نمودارها */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
            <DashboardChartLine/>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
            <DashboardChartBar/>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
            <DashboardChartPie/>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
