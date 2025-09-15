import { useEffect, useState } from "react";

import moment from "moment-jalaali";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { getProducts } from "../../services/api";
import { Product } from "../../type/types";

interface ChartData {
  date: string;
  price: number;
}

const DashboardChartLine = () => {
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    getProducts().then((products: Product[]) => {
      const grouped: Record<string, { total: number; count: number }> = {};

      products.forEach((item) => {
        const dateKey = item.lastPriceDate
          ? moment(item.lastPriceDate, "jYYYY-MM-DD").format("jYYYY/MM/DD")
          : "نامشخص";

        if (!grouped[dateKey]) {
          grouped[dateKey] = { total: 0, count: 0 };
        }
        grouped[dateKey].total += item.price;
        grouped[dateKey].count += 1;
      });

      const chartData = Object.entries(grouped).map(
        ([date, { total, count }]) => ({
          date,
          price: Math.round(total / count),
        }),
      );

      setData(chartData);
    });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#10b981"
          strokeWidth={2}
          dot
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DashboardChartLine;
