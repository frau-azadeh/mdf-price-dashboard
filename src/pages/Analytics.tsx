import Layout from "../components/layout/Layout";
import SearchBox from "../components/ui/SearchBox";
import FilterPanel from "../components/ui/FilterPanel";
import Table from "../components/ui/Table";
import StockByTypeChart from "../components/charts/StockByTypeChart";
import PriceLineChart from "../components/charts/PriceLineChart";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { Product } from "../type/types";

const Analytics = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<Product[]>([]);
  const itemsPerPage = 50;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        setData(products);
      } catch (error) {
        console.error("خطا در گرفتن داده‌ها:", error);
      }
    };
    fetchData();
  }, []);

  // فیلتر کردن داده‌ها
  const filtered = data.filter(
    (item) =>
      (item.name?.includes(query) || item.type?.includes(query)) &&
      (type === "" || item.type === type) &&
      (size === "" || item.size === size)
  );

  // صفحه‌بندی
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filtered.slice(startIndex, startIndex + itemsPerPage);

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
