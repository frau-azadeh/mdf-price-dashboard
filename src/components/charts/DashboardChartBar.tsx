import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";
import { getLatestProducts } from "../../services/api";
import { Product } from "../../type/types";

const COLORS = ["#6B7280", "#EF4444", "#9CA3AF", "#D1D5DB", "#F87171", "#FBBF24"]

const DashboardChartBar = () => {
  const [data, setData] = useState<{ name: string; quantity: number }[]>([]);

  useEffect(() => {
    getLatestProducts().then((products: Product[]) => {
      const grouped: Record<string, number> = products.reduce(
        (acc: Record<string, number>, item: Product) => {
          const key = item.standard || "نامشخص";
          acc[key] = (acc[key] || 0) + 1;
          return acc;
        },
        {}
      );

      const chartData = Object.entries(grouped).map(([key, value]) => ({
        name: `استاندارد ${key}`,
        quantity: value,
      }));

      setData(chartData);
    });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="quantity">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DashboardChartBar;
