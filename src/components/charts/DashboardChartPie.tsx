import { useEffect, useState } from "react";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { getLatestProducts } from "../../services/api";
import { Product } from "../../type/types";

interface ChartData {
  name: string;
  value: number;
}

// 🎨 رنگ‌ها مطابق تصویر
const COLORS = [
  "#6B7280",
  "#EF4444",
  "#9CA3AF",
  "#D1D5DB",
  "#F87171",
  "#FBBF24",
];

const DashboardChartPie = () => {
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    getLatestProducts().then((products: Product[]) => {
      const grouped: Record<string, number> = {};

      products.forEach((item) => {
        const key = item.standard || "نامشخص";
        grouped[key] = (grouped[key] || 0) + 1;
      });

      const chartData = Object.keys(grouped).map((key) => ({
        name: `استاندارد ${key}`,
        value: grouped[key],
      }));

      setData(chartData);
    });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={90}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DashboardChartPie;
