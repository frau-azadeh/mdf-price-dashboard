// src/pages/Forecast.tsx
import ForecastTable from "../components/ui/ForecastTable";
import Layout from "../components/layout/Layout";
import ForecastChart from "../components/charts/ForecastChart";


const sampleDailyData = [
  { date: "1403/05/08", type: "A3", size: "16", predictedPrice: 26900 },
  { date: "1403/05/09", type: "A3", size: "16", predictedPrice: 27100 },
  { date: "1403/05/10", type: "A3", size: "16", predictedPrice: 27000 },
];

const weeklyData = [
    { date: "1403/05/14", type: "A3", size: 16, predictedPrice: 27300 },
    { date: "1403/05/15", type: "A3", size: 16, predictedPrice: 27100 },
  ];
  
  const monthlyData = [
    { date: "1403/06/01", type: "A3", size: 16, predictedPrice: 27800 },
    { date: "1403/06/08", type: "A3", size: 16, predictedPrice: 28000 },
  ];
  

const Forecast = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">پیش‌بینی قیمت میلگرد</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow">
          {/* جدول پیش‌بینی قیمت */}
          <h2 className="font-semibold mb-2">پیش‌بینی روزانه</h2>
          <ForecastTable data={sampleDailyData} />
          </div>
        <div className="bg-white p-4 rounded shadow">
          {/* نمودار قیمت */}
          <h2 className="font-semibold mb-2">نمودار روند پیش‌بینی</h2>
          <div className="text-sm text-gray-500">نمودار لاین چارت</div>
          <ForecastChart />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <ForecastTable title="پیش‌بینی هفتگی" data={weeklyData} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <ForecastTable title="پیش‌بینی ماهانه" data={monthlyData} />
        </div>
      </div>
    </Layout>
  );
};

export default Forecast;
