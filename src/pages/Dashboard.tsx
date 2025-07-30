// src/pages/Dashboard.tsx
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Table from "../components/ui/Table";
import SearchBox from "../components/ui/SearchBox";
import FilterPanel from "../components/ui/FilterPanel";
import { getProducts } from "../services/api";
import { Product } from "../type/types";


import Pagination from "../components/ui/Pagination";
import DashboardChartLine from "../components/charts/DashboardChartLine";
import DashboardChartBar from "../components/charts/DashboardChartBar";
import DashboardChartPie from "../components/charts/DashboardChartPie";

const Dashboard = () => {

  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<Product[]>([]);
  const itemsPerPage = 50;

  useEffect(() => {
    const fetchData = async () => {
      const products: Product[] = await getProducts();
      setData(products);
    };
    fetchData();
  }, []);

  const filteredData = data.filter(
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

    </Layout>
  );
};

export default Dashboard;
