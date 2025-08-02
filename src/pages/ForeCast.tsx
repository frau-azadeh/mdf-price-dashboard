import ForecastTable from "../components/ui/ForecastTable";
import Layout from "../components/layout/Layout";
import ForecastChart from "../components/charts/ForecastChart";
import { useEffect, useState } from "react";
import { getForecast } from "../services/api";
import ScrollToTop from "../components/ui/ScrollToTap";

// 📌 تعریف اینترفیس داده پیش‌بینی
interface ForecastItem {
  date: string;
  type: string;
  size: number | string;
  predictedPrice: number;
}

interface ForecastResponse {
  daily: ForecastItem[];
  weekly: ForecastItem[];
  monthly: ForecastItem[];
}

const Forecast = () => {
  const [forecastData, setForecastData] = useState<ForecastResponse | null>(null);

  useEffect(() => {
    const fetchForecast = async () => {
      const data: ForecastResponse = await getForecast();
      setForecastData(data);
    };
    fetchForecast();
  }, []);

  return (
    <Layout>
      <ScrollToTop/>
      <h1 className="text-2xl font-bold mb-6">پیش‌بینی قیمت MDF</h1>

      {forecastData ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="font-semibold mb-2">پیش‌بینی روزانه</h2>
              <ForecastTable data={forecastData.daily} />
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="font-semibold mb-2">نمودار روند پیش‌بینی</h2>
              <ForecastChart data={forecastData.daily} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <ForecastTable title="پیش‌بینی هفتگی" data={forecastData.weekly} />
            </div>
            <div className="bg-white p-4 rounded shadow">
              <ForecastTable title="پیش‌بینی ماهانه" data={forecastData.monthly} />
            </div>
          </div>
        </>
      ) : (
        <p className="text-gray-500">در حال بارگذاری پیش‌بینی...</p>
      )}
    </Layout>
  );
};

export default Forecast;
