// src/pages/Dashboard.tsx
import { useEffect, useState } from "react";

import DashboardChartBar from "../components/charts/DashboardChartBar";
import DashboardChartLine from "../components/charts/DashboardChartLine";
import DashboardChartPie from "../components/charts/DashboardChartPie";
import Layout from "../components/layout/Layout";
import FilterPanel from "../components/ui/FilterPanel";
import Pagination from "../components/ui/Pagination";
import ScrollToTop from "../components/ui/ScrollToTap";
import SearchBox from "../components/ui/SearchBox";
import Table from "../components/ui/Table";
import { getLatestProducts } from "../services/api";
import { Product } from "../type/types";

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<Product[]>([]);
  const itemsPerPage = 25;

  useEffect(() => {
    const fetchData = async () => {
      const products: Product[] = await getLatestProducts();
      setData(products);
    };
    fetchData();
  }, []);

  // اعمال جستجو و فیلتر
  const filteredData = data.filter(
    (item) =>
      (item.name.includes(query) || item.type.includes(query)) &&
      (type === "" || item.type === type) &&
      (size === "" || item.size === size),
  );

  // محاسبه صفحه‌بندی
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <Layout>
      <ScrollToTop />
      <h1 className="text-2xl font-bold mb-4">داشبورد مدیریت قیمت MDF</h1>

      {/* نمودارها */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <DashboardChartLine />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <DashboardChartBar />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <DashboardChartPie />
        </div>
      </div>

      {/* جدول قیمت‌ها */}
      <div className="bg-white rounded-lg shadow p-4 mb-6 space-y-4">
        <SearchBox value={query} onChange={setQuery} />
        <FilterPanel
          type={type}
          size={size}
          onTypeChange={setType}
          onSizeChange={setSize}
        />
        {/* ✅ داده صفحه‌بندی‌شده به جدول پاس داده می‌شود */}
        <Table data={paginatedData} startIndex={startIndex} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;
