// src/components/charts/DashboardChart1.tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "1403/05/05", price: 26000 },
  { date: "1403/05/06", price: 26200 },
  { date: "1403/05/07", price: 26500 },
  { date: "1403/05/08", price: 26800 },
  { date: "1403/05/09", price: 27000 },
];

const DashboardChartLine = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#10b981" strokeWidth={2} dot />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DashboardChartLine;
