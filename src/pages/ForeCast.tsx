// src/pages/Forecast.tsx
import Layout from "../components/layout/Layout";

const Forecast = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">پیش‌بینی قیمت میلگرد</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow">
          {/* جدول پیش‌بینی قیمت */}
          <h2 className="font-semibold mb-2">پیش‌بینی روزانه</h2>
          <div className="text-sm text-gray-500">اینجا جدول روزانه میاد</div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          {/* نمودار قیمت */}
          <h2 className="font-semibold mb-2">نمودار روند پیش‌بینی</h2>
          <div className="text-sm text-gray-500">نمودار لاین چارت</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">پیش‌بینی هفتگی</h2>
          <div className="text-sm text-gray-500">اینجا جدول هفتگی میاد</div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">پیش‌بینی ماهانه</h2>
          <div className="text-sm text-gray-500">اینجا جدول ماهانه میاد</div>
        </div>
      </div>
    </Layout>
  );
};

export default Forecast;
