import Layout from "../components/layout/Layout";
import SearchBox from "../components/ui/SearchBox";
import FilterPanel from "../components/ui/FilterPanel";
import Table from "../components/ui/Table";
import StockByTypeChart from "../components/charts/StockByTypeChart";
import PriceLineChart from "../components/charts/PriceLineChart";
import { useEffect, useState } from "react";
import { getLatestProducts, getLatestPriceAnalysis } from "../services/api";
import { Product, PriceAnalysis } from "../type/types";
import Pagination from "../components/ui/Pagination";

const Analytics = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<Product[]>([]);
  const [analysis, setAnalysis] = useState<PriceAnalysis | null>(null);
  const itemsPerPage = 50;


  // ✅ دریافت داده محصولات
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getLatestProducts();
        setData(products);
      } catch (error) {
        console.error("❌ خطا در گرفتن داده محصولات:", error);
      }
    };
    fetchProducts();
  }, []);

  // ✅ دریافت داده تحلیل از سرویس پایتون
  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const result = await getLatestPriceAnalysis();
        if (result && !result.error) {
          setAnalysis(result);
        } else {
          setAnalysis(null);
        }
      } catch (error) {
        console.error("❌ خطا در گرفتن داده تحلیل:", error);
        setAnalysis(null);
      }
    };
    fetchAnalysis();
  }, [query, type, size]);

  // ✅ فیلتر داده‌ها
  const filtered = data.filter(
    (item) =>
      (item.name?.includes(query) || item.type?.includes(query)) &&
      (type === "" || item.type === type) &&
      (size === "" || item.size === size)
  );

  // ✅ صفحه‌بندی
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filtered.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">تحلیل قیمت میلگرد</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">نمودار تغییر قیمت</h2>
          {analysis?.summary ? (
            <PriceLineChart analysisData={analysis} />
          ) : (
            <p className="text-gray-500 text-sm">داده‌ای برای نمایش موجود نیست</p>
          )}
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">موجودی بر اساس نوع</h2>
          {analysis?.by_standard ? (
            <StockByTypeChart
              data={Object.entries(analysis.by_standard).map(([key, value]) => ({
                name: key,
                quantity: value as number,
              }))}
            />
          ) : (
            <p className="text-gray-500 text-sm">داده‌ای برای نمایش موجود نیست</p>
          )}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-4 space-y-4">
        <SearchBox value={query} onChange={setQuery} />
        <FilterPanel
          type={type}
          size={size}
          onTypeChange={setType}
          onSizeChange={setSize}
        />
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

export default Analytics;
